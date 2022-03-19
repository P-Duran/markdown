import { Grid } from "@mui/material";

import KeyIcon from "@mui/icons-material/Key";
import { FieldForm } from "src/components/form/FIeldForm";
import { register } from "src/api/AuthenticationApi";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

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
          subtitle="Register into the application"
          submitText="Register"
          onSubmit={(formData) =>
            register(formData)
              .then((response) => {
                enqueueSnackbar(response, {
                  variant: "success",
                  preventDuplicate: true,
                });
                navigate("/login");
              })
              .catch((err) =>
                enqueueSnackbar(err.response.data, {
                  variant: "error",
                  preventDuplicate: true,
                })
              )
          }
          fieldsData={[
            { key: "username", label: "Username" },
            { key: "email", label: "Email" },
            {
              key: "password1",
              label: "Password",
              type: "password",
              endAdornment: <KeyIcon />,
            },
            {
              key: "password2",
              label: "Repeat Password",
              type: "password",
              endAdornment: <KeyIcon />,
            },
          ]}
        />
      </Grid>
    </Grid>
  );
};
