import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import { LateralMenu } from "./LaterlaMenu";

interface Props {
  children: React.ReactNode;
}

export const ResponsiveDrawer = ({ children }: Props) => {
  return (
    <Box sx={{ display: "flex", width: "100%", p: 1 }}>
      <CssBaseline />
      <LateralMenu />
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
    </Box>
  );
};
