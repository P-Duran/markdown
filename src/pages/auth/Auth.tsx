import { Grid } from "@mui/material";
import React, { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { HomeView } from "src/components/homeView/HomeView";
import { NotFound } from "src/components/notFound/NotFound";
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
      <HomeView />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Grid>
  );
};
