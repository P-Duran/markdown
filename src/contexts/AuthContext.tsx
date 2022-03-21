import { createContext, useContext } from "react";
import { CurrentUser, LoginRequest } from "src/types/AuthenticationTypes";

export interface AuthContext {
  login: (request: LoginRequest) => Promise<void>;
  logout: (user?: CurrentUser) => Promise<void>;
  getCurrentUser: () => Promise<void>;
  currentUser?: CurrentUser;
  isLogged: boolean;
}

export const initializeContext = (): AuthContext => {
  return {
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    getCurrentUser: () => Promise.resolve(),
    currentUser: undefined,
    isLogged: false,
  };
};

export const AuthContext = createContext(initializeContext());

export const useAuth = () => useContext(AuthContext);
