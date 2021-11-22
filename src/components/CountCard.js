import React from "react";
import { Stack } from "@mui/material";
import CustomText from "components/typography/CustomText";
import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";

export default function CountCard({
  icon = "",
  title = "",
  value = 0,
  variant = "primary",
  spacing = 5,
}) {
  return (
    <div className="w-full h-full">
      <Stack alignItems="center" spacing={spacing}>
        {icon}
        <CustomText className="text-3xl text-white" align="center">
          {title}
        </CustomText>
        <CustomText color={variant} variant="h4" bold>
          <CountUp end={value} />
          {/* <VisibilitySensor>
            {({ isVisible }) => (isVisible ? <CountUp end={value} /> : null)}
          </VisibilitySensor> */}
        </CustomText>
      </Stack>
    </div>
  );
}
