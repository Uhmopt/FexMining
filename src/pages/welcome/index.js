import Layout from "layouts";
import React from "react";
import WelcomeBody from "./WelcomeBody";
import WelcomeSlide from "./WelcomeSlide";

export default function Welcome() {
  return (
    <Layout fullWidth>
      <WelcomeSlide />
      <WelcomeBody />
    </Layout>
  );
}
