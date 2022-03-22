import { Grid } from "@mui/material";

import KeyIcon from "@mui/icons-material/Key";
import { FieldForm } from "src/components/form/FIeldForm";
import { register } from "src/api/authentication";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  return (
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
            type: showPass1 ? "text" : "password",
            endAdornment: (
              <KeyIcon
                sx={{ cursor: "pointer" }}
                onMouseDown={() => setShowPass1(true)}
                onMouseUp={() => setShowPass1(false)}
              />
            ),
          },
          {
            key: "password2",
            label: "Repeat Password",
            type: showPass2 ? "text" : "password",
            endAdornment: (
              <KeyIcon
                sx={{ cursor: "pointer" }}
                onMouseDown={() => setShowPass2(true)}
                onMouseUp={() => setShowPass2(false)}
              />
            ),
          },
        ]}
      />
    </Grid>
  );
};
