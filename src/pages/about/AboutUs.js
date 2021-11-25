import CountPanel from "pages/welcome/CountPanel";
import FriendsSection from "pages/welcome/FriendsSection";
import HowItWorksSection from "pages/welcome/HowItWorksSection";
import React from "react";
import AboutHeader from "./sections/AboutHeader";
import MoreAboutUs from "./sections/MoreAboutUs";

export default function AboutUs() {
  return (
    <div>
      <AboutHeader />
      <MoreAboutUs />
      <HowItWorksSection />
      <CountPanel />
      <FriendsSection />
    </div>
  );
}
