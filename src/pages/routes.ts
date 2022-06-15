import { Paths } from "./paths";

type RouteType = {
  path: string;
  component: string;
  componentPath: string;
};

export const initialRoutes: RouteType[] = [
  {
    path: "/*",
    componentPath: "auth",
    component: "Auth",
  },
];

export const authRoutes: RouteType[] = [
  {
    path: Paths.HOME,
    componentPath: "login",
    component: "Login",
  },
  {
    path: Paths.REGISTER,
    componentPath: "register",
    component: "Register",
  },
];

export const loggedRoutes: RouteType[] = [
  {
    path: Paths.HOME,
    componentPath: "home",
    component: "Home",
  },
  {
    path: Paths.DASHBOARD,
    componentPath: "dashboard",
    component: "Dashboard",
  },
  {
    path: Paths.EDITOR,
    componentPath: "editor",
    component: "Editor",
  },
  {
    path: Paths.PREVIEW,
    componentPath: "preview",
    component: "Preview",
  },
];
