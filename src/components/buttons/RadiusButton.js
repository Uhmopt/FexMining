import { Fab } from "@mui/material";
import CustomText from "components/typography/CustomText";
import React from "react";

export default function RadiusButton({
  color = "primary",
  children = "",
  className = "",
}) {
  return (
    <Fab
      className={`${className}`}
      color={color}
      variant="extended"
      size="small"
    >
      <CustomText bold className="mx-8 my-4">
        {children}
      </CustomText>
    </Fab>
  );
}
