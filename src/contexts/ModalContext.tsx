import { createContext, useContext } from "react";

export interface ModalContextProps {
  components: JSX.Element;
}

export interface ModalContext {
  open: (props: ModalContextProps) => void;
  close: () => void;
  isOpen: boolean;
}

export const initializeContext = (): ModalContext => {
  return {
    open: () => {},
    close: () => {},
    isOpen: false,
  };
};

export const ModalContext = createContext(initializeContext());

export const useModal = () => useContext(ModalContext);
