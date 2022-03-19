import { Grid } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import { FieldForm } from "src/components/form/FIeldForm";
import { login } from "src/api/AuthenticationApi";
import { useCurrentUser } from "src/contexts/CurrentUserContext";
import { useSnackbar } from "notistack";

export const Login = () => {
  const { setCurrentUser } = useCurrentUser();
  const { enqueueSnackbar } = useSnackbar();
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
            login(formData)
              .then(setCurrentUser)
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
              type: "password",
              endAdornment: <KeyIcon />,
            },
          ]}
        />
      </Grid>
    </Grid>
  );
};
