import React from "react";

export default function RawImage({
  name = "",
  src = "",
  alt = "",
  className = "",
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt || name}
      name={name}
      className={`${className}`}
      {...props}
    />
  );
}
