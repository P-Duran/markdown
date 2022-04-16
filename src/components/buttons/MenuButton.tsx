import {
  ListItemIcon,
  Menu,
  MenuItem,
  MenuList,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { MenuOption } from "src/types/MenuButtonTypes";

interface Props {
  options?: MenuOption[];
  buttonRender: (
    handleMenuState: (target: HTMLElement) => void
  ) => React.ReactNode;
  itemSx?: SxProps<Theme>;
}

export const MenuButton = ({ options, buttonRender, itemSx = {} }: Props) => {
  const [target, setTarget] = useState<null | HTMLElement>(null);

  const onClose = () => {
    setTarget(null);
  };

  const handleMenuState = (target: HTMLElement) => {
    setTarget(target);
  };

  return (
    <>
      {buttonRender(handleMenuState)}
      {options && (
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={target}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(target)}
          onClose={onClose}
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
            {options.map((setting, i) => (
              <MenuItem
                key={setting.label}
                sx={{
                  py: 2,
                  px: 4,
                  borderBottom:
                    options.length - 1 !== i ? "2px #ebecee solid" : undefined,
                  ...itemSx,
                }}
                onClick={() => {
                  setting.action();
                  onClose();
                }}
              >
                {setting.icon && <ListItemIcon>{setting.icon}</ListItemIcon>}
                <Typography textAlign="center">{setting.label}</Typography>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}
    </>
  );
};
