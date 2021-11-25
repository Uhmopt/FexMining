import { Container, Grid } from "@mui/material";
import CustomText from "components/typography/CustomText";
import React from "react";
import GetInTouchForm from "./GetInTouchForm";

export default function GetInTouchSection() {
  return (
    <div className="my-20">
      <Container>
        <CustomText className="my-8" variant="h4" align="center" bold>
          GET IN{" "}
          <CustomText variant="h4" span color="primary" bold>
            TOUCH
          </CustomText>
        </CustomText>
        <CustomText className="my-8" align="center" helper>
          Fexmining.uk has come a long way in the cryptocurrency ecosystem.
        </CustomText>
        <div className="my-8">
          <Grid container justifyContent="center">
            <Grid item lg={6} md={6} sm={8} xs={12}>
              <GetInTouchForm />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
