import { Grid } from "@mui/material";
import React, { ReactElement } from "react";

type Props = {
  children: ReactElement;
};

export const PageContainer = ({ children }: Props) => {
  return (
    <Grid container sx={{ overflowY: "overlay" }}>
      {children}
    </Grid>
  );
};
