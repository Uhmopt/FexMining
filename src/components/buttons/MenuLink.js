import React from "react";
import { useHistory } from "react-router";

export default function MenuLink({
  children = "",
  to = "",
  active = false,
  onClick,
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
    <div className="h-10 flex justify-center items-center">
      <div
        onClick={handleClick}
        {...props}
        className={`transistion transition-all duration-500 cursor-pointer text-lg font-bold p-2 ${
          active ? "text-primary" : ""
        } hover:text-primary`}
      >
        {children}
      </div>
    </div>
  );
}
