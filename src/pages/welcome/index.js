import Layout from "layouts";
import React from "react";
import WelcomeBody from "./WelcomeBody";
import WelcomSlide from "./WelcomSlide";

export default function Welcome() {
  return (
    <Layout fullWidth>
      <WelcomSlide />
      <WelcomeBody />
    </Layout>
  );
}
