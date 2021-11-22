import { Done } from "@mui/icons-material";
import { Divider, Stack } from "@mui/material";
import { formatArray } from "lib/arrayObject";
import React from "react";
import RadiusButton from "./buttons/RadiusButton";
import CustomText from "./typography/CustomText";

export default function PriceCard({
  variant = "secondary",
  title = "",
  percent = 0,
  helper = "",
  data = [],
}) {
  return (
    <div className="border-gray-300 border-2 w-full h-full">
      <Stack>
        <CustomText
          color={variant}
          align="center"
          className="py-8"
          variant="h5"
        >
          {title}
        </CustomText>
        <CustomText
          color="white"
          align="center"
          className={`pt-4 ${
            variant === "primary" ? "bg-primary" : "bg-gray-900"
          }`}
          variant="h3"
        >
          {percent}
          <CustomText color="inherit" span>
            %
          </CustomText>
        </CustomText>
        <CustomText
          color="white"
          align="center"
          className={`pb-4 ${
            variant === "primary" ? "bg-primary" : "bg-gray-900"
          }`}
        >
          {helper}
        </CustomText>
        <div className="py-8 flex justify-center">
          <Stack spacing={4}>
            {formatArray(data).map((item, itemIndex) => (
              <CustomText key={itemIndex} bold className="text-gray-500">
                <Done /> {item}
              </CustomText>
            ))}
          </Stack>
        </div>
        <Divider />
        <div className="py-4 flex justify-center">
          <RadiusButton color={variant}>DEPOSIT NOW</RadiusButton>
        </div>
      </Stack>
    </div>
  );
}
