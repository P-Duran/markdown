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
import {
  MenuStateHandlers,
  OnOpenMenuProps,
  PopupMenuConfiguration,
} from "src/types/PopupButtonTypes";

interface Props {
  options?: MenuOption[];
  itemSx?: SxProps<Theme>;
  children?: (props: MenuStateHandlers) => React.ReactNode;
}

export const PopupMenu = ({ options, children, itemSx = {} }: Props) => {
  const [target, setTarget] = useState<null | OnOpenMenuProps>(null);

  const onClose = () => setTarget(null);

  const onOpen = (props: OnOpenMenuProps) => {
    setTarget(props);
  };
  const isTargetCOnfiguration = target && "x" in target;

  console.log(options);
  return (
    <>
      {children && children({ onClose, onOpen })}
      {options && (
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={isTargetCOnfiguration ? null : (target as HTMLElement)}
          anchorReference={isTargetCOnfiguration ? "anchorPosition" : undefined}
          anchorPosition={
            isTargetCOnfiguration
              ? {
                  top: (target as PopupMenuConfiguration).y,
                  left: (target as PopupMenuConfiguration).x,
                }
              : undefined
          }
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
