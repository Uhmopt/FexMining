import React from "react";
import { useHistory } from "react-router";

export default function MenuLink({ children = "", to = "", active = false }) {
  const history = useHistory();

  const handleClick = () => {
    if (String(to).includes("http")) {
    } else {
      history.push(to);
    }
  };

  return (
    <div className="h-10 flex justify-center items-center">
      <div
        onClick={handleClick}
        className={`transistion transition-all cursor-pointer text-lg font-bold p-2 ${
          active ? "text-primary" : ""
        } hover:text-primary`}
      >
        {children}
      </div>
    </div>
  );
}
