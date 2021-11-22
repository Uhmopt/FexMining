import { Grid } from "@mui/material";
import imageMacBook from "assets/img/mac-book.png";
import RadiusButton from "components/buttons/RadiusButton";
import RawImage from "components/RawImage";
import CustomText from "components/typography/CustomText";
import { APP_NAME } from "lib/global";
import React from "react";
import { Container } from "@mui/material";

export default function LittleAbout() {
  return (
    <div className="my-10">
      <Container>
        <Grid container spacing={1} alignItems="center">
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <CustomText variant="h3" span>
              LITTLE ABOUT
            </CustomText>{" "}
            <CustomText variant="h3" span color="primary">
              {APP_NAME}
            </CustomText>
            <CustomText variant="h4" className="my-8" paragraph>
              The best place to invest your coin today.
            </CustomText>
            <CustomText className="my-8" helper paragraph>
              Fexmining is an advanced investment platform based in Jurong,
              Singapore. It was established February 2018. We are strictly into
              trading, mining with lots of investment and assets in paid
              adverts, Forex also buying signals from big exchanges.
            </CustomText>
            <CustomText className="my-8" helper paragraph>
              Fexmining vision is to build a strong alliance and everlasting
              partnership with our investors; also leading them to financial
              Independence.
            </CustomText>
            <RadiusButton>Read More</RadiusButton>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <RawImage
              src={imageMacBook}
              className="w-full object-center object-fill"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
