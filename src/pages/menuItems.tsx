import { ReactElement } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import { colors } from "src/styles/colorPalette";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

export type MenuItem = {
  label: string;
  path: string;
  icon: ReactElement;
  iconColor: string;
};

export const menuItems: MenuItem[] = [
  {
    label: "menuItem.home",
    path: "/",
    icon: <HomeRoundedIcon />,
    iconColor: colors.darkGray,
  },
  {
    label: "menuItem.dashboard",
    path: "/dashboard",
    icon: <GridViewIcon />,
    iconColor: colors.darkRed,
  },
  {
    label: "menuItem.editor",
    path: "/editor",
    icon: <AutoFixHighRoundedIcon />,
    iconColor: colors.lightPurple,
  },
];
