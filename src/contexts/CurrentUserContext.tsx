import { createContext, useContext } from "react";
import { CurrentUser } from "src/types/AuthenticationTypes";

export interface CurrentUserContext {
  setCurrentUser: (user?: CurrentUser) => void;
  currentUser?: CurrentUser;
}

export const initializeContext = (): CurrentUserContext => {
  return {
    setCurrentUser: () => {},
    currentUser: undefined,
  };
};

export const CurrentUserContext = createContext(initializeContext());

export const useCurrentUser = () => useContext(CurrentUserContext);
