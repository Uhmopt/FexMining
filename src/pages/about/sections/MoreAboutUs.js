import { Done } from "@mui/icons-material";
import { Container, Grid } from "@mui/material";
import image from "assets/img/back/w-8.png";
import LinkButton from "components/buttons/LinkButton";
import RawImage from "components/RawImage";
import CustomText from "components/typography/CustomText";
import React from "react";

export default function MoreAboutUs() {
  return (
    <div className="w-full relative">
      <RawImage className="absolute h-full w-full object-cover" src={image} />
      <div className="relative h-full w-full pt-20 pb-36 bg-white bg-opacity-50">
        <Container>
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}></Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <CustomText className="my-8" variant="h4" bold color="black">
                MORE{" "}
                <CustomText variant="h4" span color="primary" bold>
                  ABOUT
                </CustomText>{" "}
                US
              </CustomText>
              <CustomText helper paragraph>
                Fexmining is an advanced investment platform based in Jurong,
                Singapore. It was established February 2018. We are strictly
                into trading, mining with lots of investment and assets in paid
                adverts, HYIPs, ICOs, Forex also buying signals from big
                exchanges.
              </CustomText>
              <CustomText helper paragraph>
                Fexmining vision is to build a strong alliance and everlasting
                partnership with our investors; also leading them to financial
                Independence.
              </CustomText>
              <CustomText helper paragraph>
                Our software system was developed to give our investors around
                the world a profit with varying ROI depending on the amount of
                funds invested.
              </CustomText>
              <CustomText helper paragraph>
                All associates join via the easy and affordable link
                registration which will establish a powerful international
                alliance for world trade.
              </CustomText>
              <CustomText helper paragraph>
                All investors from any country will share business ideas and the
                most important part of it, in a certain way, the profits will be
                directly distributed to all Fexmining associates worldwide.
              </CustomText>
              <CustomText helper paragraph>
                <LinkButton icon={<Done color="primary" />}>
                  You get 10% from any deposit made by your direct referral.
                </LinkButton>
              </CustomText>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
