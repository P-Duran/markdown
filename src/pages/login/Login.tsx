import { Container, Grid, Typography } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import { FieldForm } from "src/components/form/FIeldForm";
import { useAuth } from "src/contexts/AuthContext";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LoaderButton } from "src/components/buttons/LoaderButton";
import { colors } from "src/styles/colorPalette";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Paths } from "../paths";

export const Login = () => {
  const [t] = useTranslation();
  const { login } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <FieldForm
        title="Get Started"
        subtitle="Login into the application"
        submitText="Login"
        onSubmit={(formData) =>
          login({ email: formData["email"], password: formData["password"] })
            .then(() => navigate(Paths.HOME))
            .catch((err) =>
              enqueueSnackbar(err.response.data, {
                variant: "error",
                preventDuplicate: true,
              })
            )
        }
        fieldsData={[
          { key: "email", label: "Email" },
          {
            key: "password",
            label: "Password",
            type: showPass ? "text" : "password",
            endAdornment: (
              <motion.div
                transition={{ duration: 0.5 }}
                whileHover={{
                  rotate: [0, 20, -20, 20, -20, 0],
                }}
              >
                <KeyIcon
                  sx={{ cursor: "pointer" }}
                  onMouseDown={() => setShowPass(true)}
                  onMouseUp={() => setShowPass(false)}
                />
              </motion.div>
            ),
          },
        ]}
      />
      <Container maxWidth="xs" sx={{ paddingY: "24px" }}>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography variant="h5">{t("login.notRegister")}</Typography>
          <Link
            to="/register"
            style={{ textDecoration: "none", width: "100%" }}
          >
            <LoaderButton variant="secondary">
              <Typography
                sx={{ color: "white" }}
                children={t("login.createAccount")}
              />
            </LoaderButton>
          </Link>
        </Grid>
      </Container>
    </>
  );
};
