import { ButtonUnstyled, buttonUnstyledClasses } from "@mui/core";
import { useTheme } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

export default function GlowButton({ color = "default", ...props }) {
  const providedTheme = useTheme();

  const StyledButton = styled("button")(`
    position: relative;
    padding: 10px 30px;
    margin: 0 15px;
    color: ${providedTheme.palette?.[color]?.main};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    // font-size: 20px;
    // border-radius: 25px;
    overflow: hidden;
    transition: 0.5s;
    -webkit-box-reflect: below 1px -webkit-gradient(linear, right top, right bottom, from(transparent), to(rgba(255, 255, 255, 0.4)));

    // important
    filter: hue-rotate(10deg);

    &:hover {
      background: ${providedTheme.palette?.[color]?.main};
      color: #111;
      box-shadow: 0 0 50px ${providedTheme.palette?.[color]?.main};
      transition-delay: 0.5s;
      border-radius: ${providedTheme.shape.borderRadius}px;
    }
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      border-top: 2px solid ${providedTheme.palette?.[color]?.main};
      border-left: 2px solid ${providedTheme.palette?.[color]?.main};
      transition: 0.5s;
      transition-delay: 0.5s;
    }

    &:hover:before {
      width: 100%;
      height: 100%;
      transition-delay: 0s;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-bottom: 2px solid ${providedTheme.palette?.[color]?.main};
      border-right: 2px solid ${providedTheme.palette?.[color]?.main};
      transition: 0.5s;
      transition-delay: 0.5s;
    }

    &:hover:after {
      width: 100%;
      height: 100%;
      transition-delay: 0s;
    }

    &.${buttonUnstyledClasses.active} {
    }

    &.${buttonUnstyledClasses.focusVisible} {
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  `);
  return <ButtonUnstyled {...props} component={StyledButton} />;
}
