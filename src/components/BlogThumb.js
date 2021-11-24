import React from "react";
import RawImage from "./RawImage";
import CustomText from "./typography/CustomText";

export default function BlogThumb({
  image = "",
  title = "",
  description = "",
  ...props
}) {
  return (
    <div className="py-2 flex cursor-pointer" {...props}>
      <RawImage
        className="h-16 w-24 object-cover mr-4"
        src={image}
        alt={title}
      />
      <div>
        <CustomText color="primary" variant="h6">
          {title}
        </CustomText>
        <CustomText>
          {String(description).substr(0, 40)}
          {String(description).length > 40 ? "..." : ""}
        </CustomText>
      </div>
    </div>
  );
}
