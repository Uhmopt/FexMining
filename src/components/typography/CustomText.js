import { Typography } from "@mui/material";
import React from "react";

export default function CustomText({
  className = "",
  children = "",
  shadow = false,
  component = "div",
  align,
  bold = false,
  span = false,
  ...props
}) {
  return (
    <Typography
      {...props}
      component={span ? "span" : component}
      align={align}
      className={`${shadow ? `filter drop-shadow` : ``} text-${
        props?.color ?? ""
      } ${className} `}
      fontWeight={bold ? "bold" : ""}
    >
      {children}
    </Typography>
  );
}
