import { Email, LocationOn } from "@mui/icons-material";
import LinkButton from "components/buttons/LinkButton";
import Logo from "components/Logo";
import CustomText from "components/typography/CustomText";
import { APP_SUPPORT_EMAIL } from "lib/global";
import { APP_ADDRESS } from "lib/global";
import React from "react";

export default function FooterAbout() {
  return (
    <div className="text-gray-400">
      <Logo size="small" className="mb-8" />
      <CustomText className="my-4">
        Fexmining.uk is an advanced investment platform based in Jurong,
        Singapore. It was established February 2018. We are strictly into
        bitcoin mining and investment
      </CustomText>
      <LinkButton icon={<LocationOn color="primary" />}>
        {APP_ADDRESS}
      </LinkButton>
      <LinkButton icon={<Email color="primary" />}>
        {APP_SUPPORT_EMAIL}
      </LinkButton>
    </div>
  );
}
