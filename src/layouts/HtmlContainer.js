import React from "react";

export default function HtmlContainer({ children = "" }) {
  return (
    <div className={`relative min-h-screen bg-gray-100 scroll-thumb`}>
      {children}
    </div>
  );
}
