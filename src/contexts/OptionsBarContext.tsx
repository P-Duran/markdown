import { createContext, useContext } from "react";

export interface OptionsBarProps {
  children?: Record<string, React.ReactNode>;
}

export interface OptionsBarContext {
  show: (props: OptionsBarProps) => void;
  close: () => void;
  isOpen: boolean;
}

export const initializeContext = (): OptionsBarContext => {
  return {
    show: () => {},
    close: () => {},
    isOpen: false,
  };
};

export const OptionsBarContext = createContext(initializeContext());

export const useOptionsBar = () => useContext(OptionsBarContext);
