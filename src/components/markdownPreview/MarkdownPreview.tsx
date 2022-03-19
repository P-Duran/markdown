import { Grid } from "@mui/material";
import React from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import { colors } from "src/styles/colorPalette";
import { MarkdownRender } from "../render/MarkdownRender";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import { BrowserHeader } from "../browserHeader/BrowserHeader";

type Props = {
  title: string;
  markdown: string;
  onEditClick: () => void;
  onViewClick: () => void;
};

export const MarkdownPreview = ({
  title,
  markdown,
  onEditClick,
  onViewClick,
}: Props): ReactElement => {
  return (
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
        paddingTop: "60px",
      }}
    >
      <Grid
        style={{
          backgroundColor: colors.white,
          borderRadius: "5px",
          width: "67%",
          padding: "4px 15px",
          display: "grid",
          gridTemplateColumns: "1fr 30px 24px",
        }}
      >
        {title}
        <InfoRoundedIcon
          sx={{
            color: colors.lightGreen,
            cursor: "pointer",
            fontSize: "1.4rem",
          }}
          onClick={onViewClick}
        />
        <AutoFixHighRoundedIcon
          sx={{
            color: colors.darkGray,
            cursor: "pointer",
            fontSize: "1.4rem",
          }}
          onClick={onEditClick}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: colors.white,
          transform: "scale(0.75)",
          borderRadius: "10px",
          boxShadow: "0 5px 28px rgba(0, 0, 0, 0.55)",
          minWidth: "100%",
          marginTop: "-30px",
        }}
      >
        <BrowserHeader />
        <Grid
          sx={{
            height: "290px",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: "16px",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRight: "4px solid transparent",
              borderLeft: "4px solid transparent",
              background: colors.darkGray,
              backgroundClip: "padding-box",
              borderRadius: "10px",
            },
          }}
        >
          <MarkdownRender value={markdown} preview={true} />
        </Grid>
      </Grid>
    </Grid>
  );
};
