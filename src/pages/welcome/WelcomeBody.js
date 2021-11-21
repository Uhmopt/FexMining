import React from "react";
import LittleAbout from "./LittleAbout";
import WhyChoose from "./WhyChoose";
import { Container } from "@mui/material";
import GetStartedSection from "./GetStartedSection";

export default function WelcomeBody() {
  return (
    <div>
      <Container>
        <LittleAbout />
      </Container>
      <WhyChoose />
      <GetStartedSection />
    </div>
  );
}
