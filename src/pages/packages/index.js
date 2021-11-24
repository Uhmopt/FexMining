import Layout from "layouts";
import PageHeader from "layouts/page/PageHeader";
import React from "react";
import image from "assets/img/back/coin-board.jpg";

export default function Packages() {
  return (
    <Layout fullWidth>
      <PageHeader image={image} title="OUR PACKAGES" subTitle="PRICING TABLE" />
    </Layout>
  );
}
