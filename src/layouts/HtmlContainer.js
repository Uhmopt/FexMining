import React from "react";

export default function HtmlContainer({ children = "", background = "left" }) {
  return (
    <div
      className={`min-h-screen`}
    >
      {children}
    </div>
  );
}
