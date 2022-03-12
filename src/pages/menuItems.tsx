import { ReactElement } from "react";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import { colors } from "src/styles/colorPalette";

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
