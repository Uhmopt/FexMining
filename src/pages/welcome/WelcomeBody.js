import React from "react";
import BitcoinLivePriceTableSection from "./BitcoinLivePriceTableSection";
import CountPanel from "./CountPanel";
import GetStartedSection from "./GetStartedSection";
import HowItWorksSection from "./HowItWorksSection";
import LatestWithdrawsSection from "./LatestWithdrawsSection";
import LittleAbout from "./LittleAbout";
import PriceSection from "./PriceSection";
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
      <LatestWithdrawsSection />
      <PriceSection />
    </div>
  );
}
