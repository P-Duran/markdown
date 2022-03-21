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

export const Login = () => {
  const [t] = useTranslation();
  const { login } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  return (
    <Grid
      container
      sx={{
        height: "100vh",
      }}
    >
      <Grid item sm={7} sx={{ backgroundColor: "#ebf4fb" }}></Grid>
      <Grid item sm={5} sx={{ height: "100%" }}>
        <FieldForm
          title="Get Started"
          subtitle="Login into the application"
          submitText="Login"
          onSubmit={(formData) =>
            login({ email: formData["email"], password: formData["password"] })
              .then(() => navigate("/"))
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
                <KeyIcon
                  sx={{ cursor: "pointer" }}
                  onMouseDown={() => setShowPass(true)}
                  onMouseUp={() => setShowPass(false)}
                />
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
              <LoaderButton
                backgroundColor={colors.lightGreen}
                label={t("login.createAccount")}
              />
            </Link>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};
