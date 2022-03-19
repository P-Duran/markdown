import { ReactElement } from "react";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
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
    icon: <DashboardRoundedIcon />,
    iconColor: colors.darkRed,
  },
  {
    label: "menuItem.editor",
    path: "/editor",
    icon: <AutoFixHighRoundedIcon />,
    iconColor: colors.lightPurple,
  },
];
