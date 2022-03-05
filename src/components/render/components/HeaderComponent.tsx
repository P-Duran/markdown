import { Divider, Typography } from "@mui/material";
import { HeadingProps } from "react-markdown/lib/ast-to-react";

export const HeaderComponent = ({ children, level }: HeadingProps) => {
  return (
    <>
      {/*@ts-ignore */}
      <Typography variant={"h" + level}>{children}</Typography>
      {level <= 2 && <Divider sx={{ margin: "10px 0" }} />}
    </>
  );
};
