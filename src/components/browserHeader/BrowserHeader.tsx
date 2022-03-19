import React, { ReactElement } from "react";
import { BrowserPages } from "./components/BrowserPages";
import { BrowserNavigation } from "./components/BrowserNavigation";
import { colors } from "src/styles/colorPalette";

export const BrowserHeader = React.memo((): ReactElement => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: colors.white,
        borderRadius: "10px 10px 0 0",
      }}
    >
      <BrowserPages />
      <BrowserNavigation />
    </div>
  );
});
