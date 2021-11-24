import { ArrowRightAlt } from "@mui/icons-material";
import LinkButton from "components/buttons/LinkButton";
import CustomText from "components/typography/CustomText";
import React from "react";

export default function FooterQuickLinks() {
  return (
    <div className="text-gray-400">
      <CustomText className="mb-4" color="white" variant="h4">
        <span className="border-b-2 border-primary pb-2">QUICK</span> LINKS
      </CustomText>
      {[
        { label: "HOME", to: "" },
        { label: "ABOUT US", to: "" },
        { label: "PACKAGES", to: "" },
        { label: "OUR TIMELINE", to: "" },
        { label: "MEMBER'S AREA", to: "" },
        { label: "CONTACT US", to: "" },
        { label: "CONTACT ADMIN", to: "" },
      ].map((link, linkIndex) => (
        <LinkButton key={linkIndex} icon={<ArrowRightAlt color="primary" />}>
          {link?.label ?? ""}
        </LinkButton>
      ))}
    </div>
  );
}
