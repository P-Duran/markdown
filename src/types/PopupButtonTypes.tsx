export interface MenuStateHandlers {
  onOpen: (props: OnOpenMenuProps) => void;
  onClose: () => void;
}

export type OnOpenMenuProps = HTMLElement | PopupMenuConfiguration;

export interface PopupMenuConfiguration {
  x: number;
  y: number;
}
