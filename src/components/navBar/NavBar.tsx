import React, { ReactElement, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { menuItems } from "src/pages/menuItems";
import { useNavigate } from "react-router-dom";
import { colors } from "src/styles/colorPalette";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import { useAuth } from "src/contexts/AuthContext";

type SettingOption = {
  label: string;
  action: () => void;
};

export const NavBar = (): ReactElement => {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { currentUser, logout } = useAuth();

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const settingOptions: SettingOption[] = [
    { label: "Profile", action: () => undefined },
    { label: "Account", action: () => undefined },
    { label: "Dashboard", action: () => undefined },
    {
      label: "Logout",
      action: () =>
        logout()
          .then(() => navigate("/"))
          .catch((err) =>
            enqueueSnackbar(err.response.data, {
              variant: "error",
              preventDuplicate: true,
            })
          ),
    },
  ];

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: colors.darkPurple }}>
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpenSidebar((prevState) => !prevState)}
              color="inherit"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              MARKDOWN
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setOpenSidebar((prevState) => !prevState)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              MARKDOWN
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={currentUser?.name.toUpperCase()}
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settingOptions.map((setting) => (
                  <MenuItem
                    key={setting.label}
                    onClick={() => {
                      handleCloseUserMenu();
                      setting.action();
                    }}
                  >
                    <Typography textAlign="center">{setting.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="left"
        open={openSidebar}
        onClose={() => setOpenSidebar(false)}
        sx={{ zIndex: "1000" }}
      >
        <Box
          sx={{
            width: 250,
            paddingTop: "60px",
          }}
          role="presentation"
          onClick={() => setOpenSidebar(false)}
          onKeyDown={() => setOpenSidebar(false)}
        >
          <List>
            {menuItems.map(({ label, icon, path, iconColor }) => (
              <ListItem button key={path} onClick={() => navigate(path)}>
                <ListItemIcon sx={{ color: iconColor }}>{icon}</ListItemIcon>
                <ListItemText primary={t(label)} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Lorem", "Ipsum", "Algo"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
