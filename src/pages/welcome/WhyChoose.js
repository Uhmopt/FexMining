import RawImage from "components/RawImage";
import React from "react";
import image from "assets/img/back/w-2.png";
import CustomText from "components/typography/CustomText";
import { APP_NAME } from "lib/global";
import { Container, Grid } from "@mui/material";
import { featureCards } from "./data/featureCards";
import FeatureCard from "components/FeatureCard";

export default function WhyChoose() {
  return (
    <div className="w-full relative">
      <RawImage className="absolute h-full w-full object-cover" src={image} />
      <Container>
        <div className="relative h-full w-full flex flex-col justify-center items-center my-10 py-4">
          <div className="my-4">
            <CustomText variant="h4" span>
              WHY CHOOSE
            </CustomText>{" "}
            <CustomText variant="h4" span color="primary">
              {APP_NAME}
            </CustomText>
          </div>
          <CustomText className="my-4" helper>
            Fexmining is a trading platform that pays his investors 2.5% daily
            for 30days. We trade and help you get to financial Independence.
          </CustomText>
          <div className="my-4">
            <Grid container spacing={6}>
              {featureCards.map((card, cardIndex) => (
                <Grid key={cardIndex} item lg={4} md={4} sm={6} xs={12}>
                  <FeatureCard
                    image={card?.image ?? ""}
                    title={card?.title}
                    description={card?.description}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
}
