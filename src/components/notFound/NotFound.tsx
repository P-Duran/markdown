import { Grid, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { colors } from "src/styles/colorPalette";
import { ReactComponent as NotFoundSvg } from "../../assets/svg/notFound.svg";
import { LoaderButton } from "../buttons/LoaderButton";

export const NotFound = (): ReactElement => {
  const [t] = useTranslation();

  return (
    <Grid
      item
      sm={5}
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        padding: 4,
        paddingTop: 10,
        flexDirection: "column",
      }}
    >
      <Typography variant="h2">No existe esta página</Typography>
      <NotFoundSvg width="100%" />
      <Link to="/" style={{ textDecoration: "none", width: "60%" }}>
        <LoaderButton
          backgroundColor={colors.primary}
          label={t("homeView.returnHome")}
        />
      </Link>
    </Grid>
  );
};
