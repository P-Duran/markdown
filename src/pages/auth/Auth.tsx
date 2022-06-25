import { Grid } from "@mui/material";
import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { HomeView } from "src/components/homeView/HomeView";
import { NotFound } from "src/components/notFound/NotFound";
import { renderRoute } from "src/utils/RouteUtils";
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
      <Grid
        item
        sm={6}
        sx={{ height: "100%", paddingTop: 5, backgroundColor: "white" }}
      >
        <Routes>
          {authRoutes.map((route) => renderRoute(route))}
          {/* TODO: Not Found Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Grid>
    </Grid>
  );
};
