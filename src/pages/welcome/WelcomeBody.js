import React from "react";
import BitcoinLivePriceTableSection from "./BitcoinLivePriceTableSection";
import CountPanel from "./CountPanel";
import EssentialBenefits from "./EssentialBenefits";
import FriendsSection from "./FriendsSection";
import GetStartedSection from "./GetStartedSection";
import HowItWorksSection from "./HowItWorksSection";
import LatestWithdrawsSection from "./LatestWithdrawsSection";
import LittleAbout from "./LittleAbout";
import OnlineQuestion from "./OnlineQuestion";
import PriceSection from "./PriceSection";
import StartInvesting from "./StartInvesting";
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
      <StartInvesting />
      <EssentialBenefits />
      <OnlineQuestion />
      <FriendsSection />
    </div>
  );
}
