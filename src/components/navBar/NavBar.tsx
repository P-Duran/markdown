import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { ReactElement, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "src/contexts/AuthContext";
import {
  OptionsBarContext,
  OptionsBarProps,
} from "src/contexts/OptionsBarContext";
import { menuItems } from "src/pages/menuItems";
import { Paths } from "src/pages/paths";
import { colors } from "src/styles/colorPalette";
import { NavBarItem } from "./NavBarItem";
import { OptionsBar } from "./OptionsBar";
import { UserOptions } from "./UserOptions";
interface Props {
  children?: React.ReactNode;
}

export const NavBar = ({ children }: Props): ReactElement => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [optionsBarProps, setOptionsBarProps] = useState<OptionsBarProps>();
  const location = useLocation();
  const { isLogged } = useAuth();

  useEffect(() => {
    setVisible(false);
    setOptionsBarProps(undefined);
  }, [location.pathname]);

  const handleShow = (props: OptionsBarProps) => {
    setVisible(true);
    setOptionsBarProps(props);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      {isLogged && (
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: colors.white,
            borderBottom: "1px #ebecee solid",
            color: "black",
          }}
          elevation={0}
        >
          <Container maxWidth={false}>
            <Toolbar
              disableGutters
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ display: "flex", minHeight: "inherit" }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    pr: 2,
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(Paths.HOME)}
                >
                  MARKDOWN
                </Typography>

                {menuItems.map((menuItem) => (
                  <NavBarItem menuItem={menuItem} />
                ))}
              </Box>
              <UserOptions />
            </Toolbar>
            <OptionsBar
              visible={visible}
              children={optionsBarProps?.children}
            />
          </Container>
        </AppBar>
      )}
      <OptionsBarContext.Provider
        value={{ show: handleShow, close: handleClose }}
      >
        {children}
      </OptionsBarContext.Provider>
    </>
  );
};
