import React from "react";
import LittleAbout from "./LittleAbout";
import WhyChoose from "./WhyChoose";
import { Container } from "@mui/material";

export default function WelcomeBody() {
  return (
    <div>
      <Container>
        <LittleAbout />
      </Container>
      <WhyChoose />
    </div>
  );
}
