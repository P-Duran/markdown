import { Paths } from "./paths";

export type RouteType = ParentRoute | LeafRoute;

export type ParentRoute = {
  path: string;
  childrens: RouteType[];
};

export type LeafRoute = LeafIndexRoute | LeafPathRoute;

export type LeafIndexRoute = {
  index: boolean;
  component: string;
  componentPath: string;
};

export type LeafPathRoute = {
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
    childrens: [
      {
        path: ":markdownId",
        childrens: [
          { index: true, componentPath: "preview", component: "Preview" },
          {
            path: ":pageId",
            componentPath: "preview",
            component: "Preview",
          },
        ],
      },
    ],
  },
];
