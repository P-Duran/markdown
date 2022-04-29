import { MenuOption } from "src/types/MenuButtonTypes";
import { PopupMenu } from "./PopupMenu";

interface Props {
  options?: MenuOption[];
  children: React.ReactNode;
}

export const ContextMenu = ({ children, options }: Props) => {
  return (
    <PopupMenu options={options}>
      {({ onOpen }) => (
        <div
          onContextMenu={(e) => {
            e.preventDefault();
            onOpen({
              x: e.clientX - 4,
              y: e.clientY - 20,
            });
          }}
        >
          {children}
        </div>
      )}
    </PopupMenu>
  );
};
