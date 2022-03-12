import { Grid } from "@mui/material";
import React, { ReactElement } from "react";
import { MarkdownRender } from "src/components/render/MarkdownRender";
import { markdownMock } from "src/mocks/markdownMocks";
import { colors } from "../../styles/colorPalette";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";

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
        <Grid
          item
          xs={4}
          sx={{
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxHeight: "400px",
            paddingTop: "40px",
          }}
          key={index}
        >
          <div
            style={{
              backgroundColor: colors.white,
              borderRadius: "5px",
              width: "68%",
              padding: "4px 15px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Título de la página
            <AutoFixHighRoundedIcon
              sx={{ color: colors.darkRed, cursor: "pointer" }}
            />
          </div>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: colors.white,
              transform: "scale(0.75)",
              overflowY: "scroll",
              borderRadius: "10px",
              boxShadow: "0 5px 28px rgba(0, 0, 0, 0.55)",

              "&::-webkit-scrollbar": {
                width: "16px",
              },
              "&::-webkit-scrollbar-thumb": {
                padding: "0 4px",
                borderRight: "4px solid transparent",
                borderLeft: "4px solid transparent",
                background: colors.darkGray,
                backgroundClip: "padding-box",
                borderRadius: "10000px",
              },
            }}
          >
            <MarkdownRender value={markdownValue} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
