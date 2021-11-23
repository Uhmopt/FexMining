import { Container, Grid } from "@mui/material";
import image from "assets/img/back/coin-board.jpg";
import RawImage from "components/RawImage";
import CustomText from "components/typography/CustomText";
import React from "react";
import OnlineQuestionForm from "./OnlineQuestionForm";

export default function OnlineQuestion() {
  return (
    <div className="w-full relative">
      <RawImage className="absolute h-full w-full object-cover" src={image} />
      <div className="relative h-full w-full bg-black bg-opacity-50">
        <Container>
          <Grid container>
            <Grid item lg={4} md={4} sm={12} xs={12}></Grid>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <CustomText className="my-8" variant="h4" bold color="white">
                ONLINE{" "}
                <CustomText variant="h4" span color="primary" bold>
                  QUESTION
                </CustomText>{" "}
                FORM
              </CustomText>
              <CustomText className="mt-4 mb-12" color="white">
                Want to contact our support team for a quick response? Fill the
                form right away and we could get right back.
              </CustomText>

              <OnlineQuestionForm />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
