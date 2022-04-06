import { ReactElement } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import { colors } from "src/styles/colorPalette";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Paths } from "./paths";

export type MenuItem = {
  label: string;
  path: Paths;
  icon: ReactElement;
  iconColor: string;
};

export const menuItems: MenuItem[] = [
  {
    label: "menuItem.home",
    path: Paths.HOME,
    icon: <HomeRoundedIcon />,
    iconColor: colors.darkGray,
  },
  {
    label: "menuItem.dashboard",
    path: Paths.DASHBOARD,
    icon: <GridViewIcon />,
    iconColor: colors.darkRed,
  },
  {
    label: "menuItem.editor",
    path: Paths.EDITOR,
    icon: <AutoFixHighRoundedIcon />,
    iconColor: colors.lightPurple,
  },
];
