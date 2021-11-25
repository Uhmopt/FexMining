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
        <div className="my-8">
          <Container>
            {/* top */}
            <div className="py-10 ml-5 border-2 border-dashed border-primary rounded-br-3xl border-t-0 border-l-0">
              <CustomText>LAUNCH OF Fexmining.uk - 26 February 2018</CustomText>
            </div>

            {/* main */}
            <div className="py-10 pl-5 mr-5 border-2 border-dashed border-primary rounded-l-3xl border-t-0 border-r-0">
              <CustomText>BTC SUPPORT ADDED - 19th March 2018</CustomText>
            </div>
            <div className="py-10 ml-5 border-2 border-dashed border-primary rounded-r-3xl border-t-0 border-l-0">
              <CustomText>Investment Area Launched - 22nd June 2018</CustomText>
            </div>
            {/* main */}
            <div className="py-10 pl-5 mr-5 border-2 border-dashed border-primary rounded-l-3xl border-t-0 border-r-0">
              <CustomText>New Functionalities Added - December 2018</CustomText>
            </div>
            <div className="py-10 ml-5 border-2 border-dashed border-primary rounded-r-3xl border-t-0 border-l-0">
              <CustomText>Multi Language Capability - Jan 2019</CustomText>
            </div>

            {/* bottom */}
            <div className="py-10 pl-5 mr-5 border-l-2 border-dashed border-primary rounded-tl-3xl">
              <CustomText>Website Launched - October 2019</CustomText>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
}
