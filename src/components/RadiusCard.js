import React from "react";
import RawImage from "./RawImage";
import CustomText from "./typography/CustomText";

export default function RadiusCard({
  image = "",
  title = "",
  description = "",
}) {
  return (
    <div className="w-80 h-80 flex flex-col justify-center items-center shadow-lg rounded-full bg-white">
      <RawImage className="h-16 my-4 object-fill" src={image} />
      <CustomText className="my-4" color="inherit" variant="h4">
        {title}
      </CustomText>
      <CustomText className="my-4 mx-8" helper align="center">
        {description}
      </CustomText>
    </div>
  );
}
