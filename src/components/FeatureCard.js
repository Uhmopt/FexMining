import React from "react";
import RawImage from "./RawImage";
import CustomText from "./typography/CustomText";

export default function FeatureCard({
  image = "",
  title = "",
  description = "",
}) {
  return (
    <div className="w-full h-80 flex flex-col justify-center items-center transition-all duration-500 bg-white hover:bg-primary hover:text-white feature-card">
      <RawImage className="h-16 my-4 object-fill" src={image} />
      <CustomText className="my-4" color="inherit" variant="h4">
        {title}
      </CustomText>
      <CustomText className="my-4" color="inherit">
        {description}
      </CustomText>
    </div>
  );
}
