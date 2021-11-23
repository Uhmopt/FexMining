import { Person } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import React from "react";
import RawImage from "./RawImage";
import CustomText from "./typography/CustomText";

export default function BlogCard({
  image = "",
  title = "",
  description = "",
  action = "",
}) {
  return (
    <div className="border-gray-300 border-2 w-full h-full">
      <div className="relative h-56">
        <RawImage
          className="absolute h-full w-full object-cover hover:translate-x-3"
          src={image}
          alt={title}
        />
        <div className="relative h-full p-6 transition-all duration-500 bg-black bg-opacity-10 hover:bg-opacity-60">
          <Button color="primary" variant="contained">
            {action}
          </Button>
        </div>
      </div>
      <div className="p-6">
        <div>
          <CustomText variant="h5">{title}</CustomText>
          <CustomText className="my-4" helper>
            {description}
          </CustomText>
        </div>
        <Divider />
        <div className="mt-4">
          <Button color="primary" variant="text" startIcon={<Person />}>
            GET STARTED
          </Button>
        </div>
      </div>
    </div>
  );
}
