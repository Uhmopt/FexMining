import Layout from "layouts";
import PageHeader from "layouts/page/PageHeader";
import React from "react";
import image from "assets/img/back/1.jpg";

export default function TimeLine() {
  return (
    <Layout fullWidth>
      <PageHeader image={image} title="OUR TIMELINE" subTitle="TIMELINE" />
    </Layout>
  );
}
