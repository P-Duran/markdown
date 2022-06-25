import { Route } from "react-router-dom";
import { LazyRoute } from "src/pages/LazyRoute";
import {
  LeafIndexRoute,
  LeafPathRoute,
  LeafRoute,
  ParentRoute,
  RouteType,
} from "src/pages/routes";

export const renderRoute = (route: RouteType) => {
  return "childrens" in route
    ? renderParentRoute(route as ParentRoute)
    : renderChildrenRoute(route as LeafRoute);
};

const renderParentRoute = (route: ParentRoute) => (
  <Route key={route.path} path={route.path}>
    {route.childrens.map((children) => renderRoute(children))}
  </Route>
);

const renderChildrenRoute = (route: LeafRoute) =>
  "index" in route
    ? renderChildrenIndexRoute(route as LeafIndexRoute)
    : renderChildrenPathRoute(route as LeafPathRoute);

const renderChildrenIndexRoute = (route: LeafIndexRoute) => (
  <Route
    key={"index"}
    index={route.index}
    element={
      <LazyRoute
        componentPath={route.componentPath}
        componentName={route.component}
      />
    }
  />
);

const renderChildrenPathRoute = (route: LeafPathRoute) => (
  <Route
    key={route.path}
    path={route.path}
    element={
      <LazyRoute
        componentPath={route.componentPath}
        componentName={route.component}
      />
    }
  />
);
