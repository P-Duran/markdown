import React, { ReactElement } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "src/components/navBar/NavBar";
import { PageContainer } from "src/components/pageContainer/PageContainer";
import { useCurrentUser } from "src/contexts/CurrentUserContext";
import { LazyRoute } from "./LazyRoute";
import { Login } from "./login/Login";
import { routes } from "./routes";

export const AppRouter = (): ReactElement => {
  const { currentUser } = useCurrentUser();

  return (
    <Router>
      {!currentUser ? (
        <Login />
      ) : (
        <>
          <NavBar />
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
        </>
      )}
    </Router>
  );
};
