import { Container, Grid } from "@mui/material";
import RadiusButton from "components/buttons/RadiusButton";
import CustomText from "components/typography/CustomText";
import React from "react";

export default function StartInvesting() {
  return (
    <div className="py-20 bg-primary">
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <CustomText color="white" bold>
              ARE YOU IMPRESSED WITH OUR CREATIVE WORK?
            </CustomText>
            <CustomText variant="h4" color="white" bold>
              START INVESTING WITH FEXMINING?
            </CustomText>{" "}
          </Grid>
          <Grid item>
            <RadiusButton color="secondary">GET STARTED</RadiusButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
