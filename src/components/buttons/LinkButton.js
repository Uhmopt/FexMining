import React from "react";
import { useHistory } from "react-router";

export default function LinkButton({
  icon = "",
  children = "",
  to = "",
  active = false,
  onClick,
  size = "medium",
  className = "",
  variant = undefined | "contained" | "outlined",
  ...props
}) {
  const history = useHistory();

  const handleClick = () => {
    if (to) {
      if (String(to).includes("http")) {
      } else {
        history.push(to);
      }
    }
    if (typeof onClick === "function") {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      {...props}
      className={`flex items-center transition-all duration-500 cursor-pointer ${
        active ? "text-primary" : ""
      } hover:text-primary ${
        variant === "outlined"
          ? "border-2 border-gray-400 hover:border-primary"
          : ""
      } ${className}`}
    >
      <div
        className={`${size === "small" ? "m-1" : "m-2"} ${
          variant === "outlined" ? "" : "ml-0"
        }`}
      >
        {icon}
      </div>
      <div>{children}</div>
    </div>
  );
}
