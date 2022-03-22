type RouteType = {
  path: string;
  component: string;
  componentPath: string;
};

export const defaultRoutes: RouteType[] = [
  {
    path: "/",
    componentPath: "home",
    component: "Home",
  },
  {
    path: "/login",
    componentPath: "login",
    component: "Login",
  },
  {
    path: "/register",
    componentPath: "register",
    component: "Register",
  },
];

export const loggedRoutes: RouteType[] = [
  {
    path: "/",
    componentPath: "home",
    component: "Home",
  },
  {
    path: "/dashboard",
    componentPath: "dashboard",
    component: "Dashboard",
  },
  {
    path: "/editor",
    componentPath: "editor",
    component: "Editor",
  },
];
