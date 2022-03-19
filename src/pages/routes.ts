type RouteType = {
  path: string;
  component: string;
  componentPath: string;
};

export const routes: RouteType[] = [
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
