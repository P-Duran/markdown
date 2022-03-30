import {
  ListItemIcon,
  MenuItem as MuiMenuItem,
  Typography,
} from "@mui/material";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { MenuItem } from "src/pages/menuItems";

type Props = {
  menuItem: MenuItem;
};

export const NavBarItem = ({ menuItem }: Props): ReactElement => {
  const [t] = useTranslation();
  const navigate = useNavigate();

  return (
    <MuiMenuItem
      key={menuItem.label}
      sx={{
        px: 2,
        // borderBottom:
        //   settingOptions.length - 1 !== i
        //     ? "2px #ebecee solid"
        //     : undefined,
      }}
      onClick={() => {
        // handleCloseUserMenu();
        navigate(menuItem.path);
      }}
    >
      <ListItemIcon>{menuItem.icon}</ListItemIcon>
      <Typography textAlign="center">{t(menuItem.label)}</Typography>
    </MuiMenuItem>
  );
};
