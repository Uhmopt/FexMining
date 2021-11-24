import { Container, Grid, Stack } from "@mui/material";
import image from "assets/img/back/w-7.png";
import RawImage from "components/RawImage";
import React from "react";
import FooterAbout from "./sections/FooterAbout";
import FooterFeatures from "./sections/FooterFeatures";
import FooterQuickLinks from "./sections/FooterQuickLinks";
import FooterSignUp from "./sections/FooterSignUp";
import FooterSocial from "./sections/FooterSocial";

export default function MainFooter() {
  return (
    <div className="w-full relative bg-gray-900">
      <RawImage
        className="absolute w-full h-full object-cover opacity-40"
        src={image}
      />
      <div className="relative w-full min-h-100 py-24 bg-gray-900 bg-opacity-60">
        <Container>
          <Grid container spacing={1}>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <FooterAbout />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <FooterQuickLinks />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <FooterFeatures />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Stack spacing={2}>
                <FooterSignUp />
                <FooterSocial />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
