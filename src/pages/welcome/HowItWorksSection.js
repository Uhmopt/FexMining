import React from "react";
import { Container, Grid } from "@mui/material";
import CustomText from "components/typography/CustomText";
import RadiusCard from "components/RadiusCard";
import { radiusCards } from "./data/radiusCards";

export default function HowItWorksSection() {
  return (
    <div className="my-12">
      <Container>
        <CustomText className="my-8" variant="h4" align="center" bold>
          HOW{" "}
          <CustomText variant="h4" span color="primary" bold>
            IT
          </CustomText>{" "}
          WORKS
        </CustomText>
        <CustomText className="my-8" helper>
          Here are 3 Easy Steps to start Investing. We have designed a very user
          friendly Investment platform to get you investing and making some good
          returns for yourself. Read through the lines below.
        </CustomText>
        <div className="my-8">
          <Grid container spacing={5} justifyContent="center">
            {radiusCards.map((card, cardIndex) => (
              <Grid key={cardIndex} item lg={4} md={4} sm={12} xs={12}>
                <RadiusCard
                  image={card?.image ?? ""}
                  title={card?.title}
                  description={card?.description}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}
