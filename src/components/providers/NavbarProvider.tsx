import { ReactElement, useState } from "react";
import { NavbarContext } from "src/contexts/NavbarContext";

interface Props {
  children: React.ReactNode;
}

export const NavbarProvider = ({ children }: Props) => {
  const [component, setComponent] = useState<ReactElement>();

  return (
    <NavbarContext.Provider
      value={{
        component,
        setComponent,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
