import { Grid } from "@mui/material";
import React, { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { LazyRoute } from "../LazyRoute";
import { authRoutes } from "../routes";

export const Auth = (): ReactElement => {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
      }}
    >
      <Grid item sm={7} sx={{ backgroundColor: "#ebf4fb" }}></Grid>
      <Routes>
        {authRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <LazyRoute
                componentPath={route.componentPath}
                componentName={route.component}
              />
            }
          />
        ))}
        {/* TODO: Not Found Page */}
        <Route path="*" element={<p>No existe esta ruta</p>} />
      </Routes>
    </Grid>
  );
};
