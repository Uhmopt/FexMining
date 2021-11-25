import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Grid } from "@mui/material";
import LinkButton from "components/buttons/LinkButton";
import CustomText from "components/typography/CustomText";
import React from "react";

export default function FooterSocial() {
  return (
    <div className="text-gray-400">
      <CustomText className="mb-4" color="white" variant="h4">
        <span className="border-b-2 border-primary pb-2">FOOTE</span>R SOCIAL
      </CustomText>

      <div className="py-2">
        <Grid container spacing={2}>
          {[
            <Facebook />,
            <Instagram />,
            <LinkedIn />,
            <Twitter />,
            <YouTube />,
          ].map((icon, iconIndex) => (
            <Grid key={iconIndex} item>
              <LinkButton variant="outlined" icon={icon} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
