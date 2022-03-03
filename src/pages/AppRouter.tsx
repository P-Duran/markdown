import React, { ReactElement } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PageContainer } from "src/components/pageContainer/PageContainer";
import { LazyRoute } from "./LazyRoute";
import { routes } from "./routes";

export const AppRouter = (): ReactElement => {
  return (
    <div>
      <Router>
        {/* Navbar */}
        <div></div>

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
      </Router>
    </div>
  );
};
