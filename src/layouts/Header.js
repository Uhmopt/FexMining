import { CssBaseline, ThemeProvider } from "@mui/material";
import HideOnTop from "components/HideOnTop";
import React from "react";
import { darkTheme } from "theme";
import LoginHeader from "./login/LoginHeader";
import MainHeader from "./main/MainHeader";

export default function Header({ isAuth = false, ...props }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <HideOnTop {...props}>
          <LoginHeader />
        </HideOnTop>
      </ThemeProvider>
      <HideOnTop {...props}>
        <MainHeader />
      </HideOnTop>
    </React.Fragment>
  );
}
