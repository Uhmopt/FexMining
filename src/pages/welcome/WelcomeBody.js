import React from "react";
import BitcoinLivePriceTableSection from "./BitcoinLivePriceTableSection";
import CountPanel from "./CountPanel";
import GetStartedSection from "./GetStartedSection";
import HowItWorksSection from "./HowItWorksSection";
import LittleAbout from "./LittleAbout";
import WhyChoose from "./WhyChoose";

export default function WelcomeBody() {
  return (
    <div>
      <LittleAbout />
      <WhyChoose />
      <GetStartedSection />
      <HowItWorksSection />
      <BitcoinLivePriceTableSection />
      <CountPanel />
    </div>
  );
}
