import React from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import { colors } from "src/styles/colorPalette";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export const BrowserNavigation = (): ReactElement => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 12fr",
        borderBottom: `1px solid ${colors.darkGray}`,
        padding: "3px",
      }}
    >
      <ArrowBackRoundedIcon
        sx={{ color: colors.darkGray, fontSize: "1.2rem" }}
      />
      <ArrowForwardRoundedIcon
        sx={{ color: colors.lightGray, fontSize: "1.2rem" }}
      />
      <ReplayRoundedIcon sx={{ color: colors.darkGray, fontSize: "1.2rem" }} />
      <div
        style={{
          backgroundColor: colors.lightestGray,
          borderRadius: "15px",
          display: "flex",
          alignItems: "center",
          padding: "0 5px",
          gap: "5px",
        }}
      >
        <InfoOutlinedIcon sx={{ color: colors.darkGray, fontSize: "1.1rem" }} />
        <span style={{ fontSize: ".7rem" }}>example.es</span>
      </div>
    </div>
  );
};
