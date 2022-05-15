import React, { memo, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "src/components/navBar/NavBar";
import { PageContainer } from "src/components/pageContainer/PageContainer";
import { useAuth } from "src/contexts/AuthContext";
import { LazyRoute } from "./LazyRoute";
import { initialRoutes, loggedRoutes } from "./routes";

export const AppRouter = memo(() => {
  const { isLogged } = useAuth();

  const routes = useMemo(
    () => (isLogged ? loggedRoutes : initialRoutes),
    [isLogged]
  );

  return (
    <Router>
      <NavBar>
        <PageContainer>
          <Routes>
            {routes.map((route) => (
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
            ))}
            {/* TODO: Not Found Page */}
            <Route path="*" element={<p>No existe esta ruta</p>} />
          </Routes>
        </PageContainer>
      </NavBar>
    </Router>
  );
});
