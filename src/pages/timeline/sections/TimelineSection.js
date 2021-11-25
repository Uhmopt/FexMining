import { Container } from "@mui/material";
import CustomText from "components/typography/CustomText";
import React from "react";

export default function TimelineSection() {
  return (
    <div className="my-20">
      <Container>
        <CustomText className="my-8" variant="h4" align="center" bold>
          OUR{" "}
          <CustomText variant="h4" span color="primary" bold>
            TIMELINE
          </CustomText>
        </CustomText>
        <CustomText className="my-8" align="center" helper>
          Fexmining.uk has come a long way in the cryptocurrency ecosystem.
        </CustomText>
        <div className="my-8"></div>
      </Container>
    </div>
  );
}
