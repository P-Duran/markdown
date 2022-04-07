import {
  ListItemIcon,
  MenuItem as MuiMenuItem,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
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
        borderBottom: isActive ? `3px solid` : undefined,
        borderColor: "primary.main",
        marginBottom: "-2px",
      }}
      onClick={() => {
        navigate(menuItem.path);
      }}
    >
      <motion.div
        transition={{ type: "Spring" }}
        animate={{
          color: isActive ? "#000000" : "#bdbdbd",
        }}
      >
        {t(menuItem.label)}
      </motion.div>
    </MuiMenuItem>
  );
};
