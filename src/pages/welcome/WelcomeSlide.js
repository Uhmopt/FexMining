import { Grid } from "@mui/material";
import sliderImage1 from "assets/img/slider/1.jpg";
import sliderImage2 from "assets/img/slider/2.jpg";
import RadiusButton from "components/buttons/RadiusButton";
import CustomSlide from "components/CustomSlide";
import RawImage from "components/RawImage";
import CustomText from "components/typography/CustomText";
import React from "react";

export default function WelcomeSlide() {
  return (
    <div className="w-full overflow-hidden">
      <CustomSlide
        variant="fade"
        data={[
          <div className="h-160 w-full relative">
            <RawImage
              className="absolute h-full w-full object-cover"
              src={sliderImage1}
            />
            <div className="relative h-full w-full flex justify-center items-center">
              <div>
                <CustomText
                  variant="h2"
                  className="my-4 border-l-8 pl-4 border-primary text-white"
                >
                  INVEST IN
                </CustomText>
                <CustomText
                  variant="h2"
                  className="my-4 text-white tracking-widest font-bold"
                >
                  CRYPTOCURRENCY
                </CustomText>
                <CustomText
                  variant="h4"
                  className="my-4 text-white tracking-widest font-medium"
                >
                  YOUR JOURNEY TO THE CRYPTO WORLD STARTS RIGHT HERE.
                </CustomText>
                <Grid container spacing={2}>
                  <Grid item>
                    <RadiusButton>LOGIN</RadiusButton>
                  </Grid>
                  <Grid item>
                    <RadiusButton>SIGN UP NOW</RadiusButton>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>,
          <div className="h-160 w-full relative">
            <RawImage
              className="absolute h-full w-full object-cover"
              src={sliderImage2}
            />
            <div className="relative h-full w-full flex flex-col justify-center items-center">
              <CustomText
                variant="h2"
                className="my-4 border-l-8 pl-4 border-primary text-white"
              >
                EASY WAY TO
              </CustomText>
              <CustomText
                variant="h2"
                className="my-4 text-white tracking-widest font-bold"
              >
                INVEST IN CRYPTO
              </CustomText>
              <CustomText
                variant="h4"
                className="my-4 text-white tracking-widest font-medium"
              >
                TAKE THE OPPORTUNITIES OUR SYSTEM PROVIDE TO MAKE GOOD RETURNS
                FROM CRYPTOCURRENCY.
              </CustomText>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <RadiusButton>LOGIN</RadiusButton>
                </Grid>
                <Grid item>
                  <RadiusButton>SIGN UP NOW</RadiusButton>
                </Grid>
              </Grid>
            </div>
          </div>,
        ]}
      />
    </div>
  );
}
