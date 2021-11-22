import React from "react";
import LittleAbout from "./LittleAbout";
import WhyChoose from "./WhyChoose";
import GetStartedSection from "./GetStartedSection";
import HowItWorksSection from "./HowItWorksSection";

export default function WelcomeBody() {
  return (
    <div>
      <LittleAbout />
      <WhyChoose />
      <GetStartedSection />
      <HowItWorksSection />
    </div>
  );
}
