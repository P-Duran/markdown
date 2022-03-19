import React from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { colors } from "src/styles/colorPalette";
import WebIcon from "@mui/icons-material/Web";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export const BrowserPages = (): ReactElement => {
  return (
    <div
      style={{
        backgroundColor: colors.lightestGray,
        padding: "0 10px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 20fr",
        borderRadius: "10px 10px 0 0",
      }}
    >
      <span
        style={{
          backgroundColor: colors.white,
          padding: "3px 5px",
          borderRadius: "10px 10px 0 0",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          maxWidth: "max-content",
        }}
      >
        <WebIcon sx={{ color: colors.darkRed, fontSize: "1rem" }} />
        <span style={{ fontSize: ".7rem" }}>Markdown</span>
      </span>
      <span
        style={{
          backgroundColor: colors.browserPagesGray,
          padding: "3px 5px",
          borderRadius: "10px 10px 0 0",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          maxWidth: "max-content",
          border: `1px solid ${colors.lightGray}`,
          borderBottom: "none",
          boxShadow: `24px -14px 22px -8px ${colors.darkGray}`,
        }}
      >
        <TwitterIcon sx={{ color: colors.blueTwitter, fontSize: "1rem" }} />
        <span style={{ fontSize: ".7rem" }}>Twitter</span>
      </span>
      <span
        style={{
          backgroundColor: colors.browserPagesGray,
          padding: "3px 5px",
          borderRadius: "10px 10px 0 0",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          maxWidth: "max-content",
          border: `1px solid ${colors.lightGray}`,
          borderBottom: "none",
          boxShadow: `24px -14px 22px -8px ${colors.darkGray}`,
        }}
      >
        <FacebookRoundedIcon
          sx={{ color: colors.blueFacebook, fontSize: "1rem" }}
        />
        <span style={{ fontSize: ".7rem" }}>Facebook</span>
      </span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "5px",
        }}
      >
        <RemoveRoundedIcon sx={{ color: colors.darkGray, fontSize: "1rem" }} />
        <CheckBoxOutlineBlankRoundedIcon
          sx={{ color: colors.darkGray, fontSize: ".9rem" }}
        />
        <CloseRoundedIcon sx={{ color: colors.darkGray, fontSize: "1rem" }} />
      </div>
    </div>
  );
};
