import {
  ListItemIcon,
  MenuItem as MuiMenuItem,
  Typography,
} from "@mui/material";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useNavigationParams } from "src/hooks/useNavigationParams";
import { MenuItem } from "src/pages/menuItems";

type Props = {
  menuItem: MenuItem;
};

export const NavBarItem = ({ menuItem }: Props): ReactElement => {
  const [t] = useTranslation();
  const navigate = useNavigate();

  const isActive = useNavigationParams(menuItem.path);

  return (
    <MuiMenuItem
      key={menuItem.label}
      sx={{
        px: 2,
        borderBottom: isActive ? `2px ${menuItem.iconColor} solid` : undefined,
        marginBottom: "-2px",
      }}
      onClick={() => {
        navigate(menuItem.path);
      }}
    >
      <ListItemIcon
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: menuItem.iconColor,
        }}
      >
        {menuItem.icon}
      </ListItemIcon>
      <Typography display={{ xs: "none", sm: "block" }} textAlign="center">
        {t(menuItem.label)}
      </Typography>
    </MuiMenuItem>
  );
};
