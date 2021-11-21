import { CssBaseline, ThemeProvider } from "@mui/material";
import HideOnScroll from "components/HideOnScroll";
import React from "react";
import { darkTheme } from "theme";
import LoginHeader from "./login/LoginHeader";
import MainHeader from "./main/MainHeader";

export default function Header({ isAuth = false, ...props }) {
  return (
    <div className="fixed top-0 w-screen">
      <CssBaseline />
      <HideOnScroll {...props}>
        <ThemeProvider theme={darkTheme}>
          <LoginHeader />
        </ThemeProvider>
      </HideOnScroll>
      <MainHeader />
    </div>
  );
}
