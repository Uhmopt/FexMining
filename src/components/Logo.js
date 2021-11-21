import { Typography } from "@mui/material";
import { APP_NAME } from "lib/global";
import React from "react";
import RawImage from "./RawImage";
import imgLogo from "assets/img/logo/full.jpg";
import imgMark from "assets/img/logo/mark.png";
import { Link } from "react-router-dom";

export default function Logo({ variant = "img" }) {
  return (
    <div>
      <Link to="/">
        {variant === "img" ? (
          <RawImage src={imgLogo} className="h-10" />
        ) : variant === "mark" ? (
          <RawImage src={imgMark} className="h-10" />
        ) : variant === "text" ? (
          <Typography variant="h6" component="div">
            {APP_NAME}
          </Typography>
        ) : (
          <Typography variant="h6" component="div">
            {APP_NAME}
          </Typography>
        )}
      </Link>
    </div>
  );
}
