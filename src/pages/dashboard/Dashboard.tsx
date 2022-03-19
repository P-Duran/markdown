import { Grid } from "@mui/material";
import React, { ReactElement } from "react";
import { markdownMock } from "src/mocks/markdownMocks";
import { colors } from "../../styles/colorPalette";
import { MarkdownPreview } from "src/components/markdownPreview/MarkdownPreview";

export const Dashboard = (): ReactElement => {
  return (
    <Grid
      container
      sx={{
        width: "100vw",
        minHeight: "calc(100vh - 64px)",
        backgroundSize: "50px 50px",
        backgroundImage: `linear-gradient(to right, ${colors.lightGray} 1px, transparent 1px), 
          linear-gradient(to bottom, ${colors.lightGray} 1px, ${colors.darkPurple} 1px)`,
      }}
    >
      {markdownMock.map((markdownValue, index) => (
        <MarkdownPreview
          key={index}
          title={"Título de la página"}
          markdown={markdownValue}
          onEditClick={() => null}
          onViewClick={() => null}
        />
      ))}
    </Grid>
  );
};
