import Layout from "layouts";
import PageHeader from "layouts/page/PageHeader";
import React from "react";
import image from "assets/img/back/3.jpg";
import GetInTouchSection from "./sections/GetInTouchSection";

export default function Contact() {
  return (
    <Layout fullWidth>
      <PageHeader image={image} title="CONTACT US" subTitle="CONTACT US" />
      <GetInTouchSection />
    </Layout>
  );
}
