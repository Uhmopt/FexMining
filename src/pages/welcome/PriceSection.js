import { Container, Grid } from "@mui/material";
import PriceCard from "components/PriceCard";
import CustomText from "components/typography/CustomText";
import React from "react";
import { prices } from "./data/prices";

export default function PriceSection() {
  return (
    <div className="my-12">
      <Container>
        <CustomText className="my-8" variant="h4" align="center" bold>
          OUR INVESTMENT{" "}
          <CustomText variant="h4" span color="primary" bold>
            PACKAGES
          </CustomText>{" "}
        </CustomText>
        <div className="my-8 flex justify-center items-center">
          <Grid container spacing={5}>
            {prices.map((price, priceIndex) => (
              <Grid key={priceIndex} item lg={4} md={4} sm={12} xs={12}>
                <PriceCard
                  variant={price?.variant ?? ""}
                  title={price?.title ?? ""}
                  percent={price?.percent ?? ""}
                  helper={price?.helper ?? ""}
                  data={price?.data ?? []}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}
