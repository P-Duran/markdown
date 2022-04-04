import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { ListItemIcon, MenuList } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "src/contexts/AuthContext";
import { useSnackbar } from "notistack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import { Paths } from "src/pages/paths";

type SettingOption = {
  label: string;
  action: () => void;
  icon?: React.ReactNode;
};

export const UserOptions = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { currentUser, logout } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const settingOptions: SettingOption[] = [
    { label: "Profile", action: () => undefined, icon: <AccountCircleIcon /> },
    {
      label: "Logout",
      icon: <LogoutIcon />,
      action: () =>
        logout()
          .then(() => navigate(Paths.HOME))
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
        PaperProps={{
          elevation: 0,
          sx: {
            borderRadius: 2,
            border: "1px #ebecee solid",
            boxShadow: "0px 5px 35px 0px rgba(0,0,0,0.1)",
          },
        }}
      >
        <MenuList style={{ padding: 0 }}>
          {settingOptions.map((setting, i) => (
            <MenuItem
              key={setting.label}
              sx={{
                py: 2,
                px: 4,
                borderBottom:
                  settingOptions.length - 1 !== i
                    ? "2px #ebecee solid"
                    : undefined,
              }}
              onClick={() => {
                handleCloseUserMenu();
                setting.action();
              }}
            >
              <ListItemIcon>{setting.icon}</ListItemIcon>
              <Typography textAlign="center">{setting.label}</Typography>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
