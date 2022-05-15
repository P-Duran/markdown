import { SxProps, Theme } from "@mui/material";
import { MenuOption } from "src/types/MenuButtonTypes";
import { MenuStateHandlers } from "src/types/PopupButtonTypes";
import { PopupMenu } from "../menus/PopupMenu";

interface Props {
  options?: MenuOption[];
  buttonRender: (props: MenuStateHandlers) => React.ReactNode;
  itemSx?: SxProps<Theme>;
}

export const MenuButton = ({ options, buttonRender, itemSx = {} }: Props) => {
  return (
    <PopupMenu options={options} itemSx={itemSx}>
      {(props) => buttonRender(props)}
    </PopupMenu>
  );
};
