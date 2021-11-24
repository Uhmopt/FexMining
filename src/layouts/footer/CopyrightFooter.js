import LinkButton from "components/buttons/LinkButton";
import CustomText from "components/typography/CustomText";
import { APP_NAME } from "lib/global";
import React from "react";

export default function CopyrightFooter() {
  return (
    <div className="py-4 bg-black flex justify-center items-center text-white">
      <CustomText color="white">Copyright 2020 ©</CustomText>{" "}
      <LinkButton>{APP_NAME}</LinkButton>
      <CustomText color="white">. All Rights Reserved.</CustomText>
    </div>
  );
}
