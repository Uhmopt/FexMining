import Layout from "layouts";
import PageHeader from "layouts/page/PageHeader";
import React from "react";
import image from "assets/img/back/1.jpg";
import PriceSection from "pages/welcome/PriceSection";
import LatestWithdrawsSection from "pages/welcome/LatestWithdrawsSection";
import FriendsSection from "pages/welcome/FriendsSection";

export default function Packages() {
  return (
    <Layout fullWidth>
      <PageHeader image={image} title="OUR PACKAGES" subTitle="PRICING TABLE" />
      <PriceSection />
      <LatestWithdrawsSection />
      <FriendsSection />
    </Layout>
  );
}
