import { Container, Grid, Hidden } from "@mui/material";
import RawImage from "components/RawImage";
import React from "react";
import badge from "assets/img/badge/badge.png";
import badgeHorizontal from "assets/img/badge/badge-horizontal.png";
import man from "assets/img/man.png";
import CustomText from "components/typography/CustomText";
import RadiusButton from "components/buttons/RadiusButton";

export default function GetStartedSection() {
  return (
    <div className="bg-coin-board bg-fixed">
      <div className="w-full h-full bg-gray-900 bg-opacity-80">
        <Container>
          <Grid container justifyContent="space-between" alignItems="flex-end">
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
              className="flex justify-center"
            >
              <Hidden mdUp>
                <RawImage src={badgeHorizontal} className="h-60" />
              </Hidden>
              <Hidden mdDown>
                <RawImage src={badge} className="h-60" />
              </Hidden>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="flex flex-col items-center justify-center"
            >
              <CustomText variant="h5" align="center" color="white">
                WE RUN A PROGRAME THAT ALLOW OUR MEMBERS TO BECOME REGIONAL
                REPRESENTATIVES IN THEIR VARIOUS LOCALITIES. IF YOU ARE
                INTERESTED IN BEING PART OF THIS, KINDLY CONTACT US
              </CustomText>
              <RadiusButton className="my-4">Get Started</RadiusButton>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
              className="flex justify-center"
            >
              <RawImage src={man} className="h-60" />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
