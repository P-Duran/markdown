import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useAuth } from "src/contexts/AuthContext";
import { Paths } from "src/pages/paths";
import { MenuOption } from "src/types/MenuButtonTypes";
import { stringToColour } from "src/utils/ColorUtils";
import { MenuButton } from "../buttons/MenuButton";

export const UserOptions = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const settingOptions: MenuOption[] = [
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

  return (
    <MenuButton
      options={settingOptions}
      buttonRender={({ onOpen }) => (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={(e) => onOpen(e.currentTarget)} sx={{ p: 0 }}>
              <Avatar
                alt={currentUser?.name.toUpperCase()}
                src="/static/images/avatar/2.jpg"
              />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    />
  );
};
