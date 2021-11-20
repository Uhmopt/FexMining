import { CssBaseline } from "@mui/material";
import HideOnTop from "components/HideOnTop";
import React from "react";
import LoginHeader from "./login/LoginHeader";
import MainHeader from "./main/MainHeader";

export default function Header({ isAuth = false, ...props }) {
  const isLoginPage = window.location.pathname === "/";

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnTop {...props}>
        <div>{!isLoginPage ? <MainHeader /> : <LoginHeader />}</div>
      </HideOnTop>
    </React.Fragment>
  );
}
