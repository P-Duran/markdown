import { createContext, ReactElement, useContext } from "react";

export interface NavbarContextInterface {
  component?: ReactElement;
  setComponent: (component?: ReactElement) => void;
}

export const initializeContext = (): NavbarContextInterface => {
  return {
    component: <></>,
    setComponent: () => undefined,
  };
};

export const NavbarContext = createContext(initializeContext());

export const useNavbar = () => useContext(NavbarContext);
