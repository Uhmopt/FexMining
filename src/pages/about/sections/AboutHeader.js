import image from "assets/img/back/4.jpg";
import PageHeader from "layouts/page/PageHeader";
import React from "react";

export default function AboutHeader() {
  return (
    <div>
      <PageHeader image={image} title="ABOUT US" subTitle="ABOUT US" />
    </div>
  );
}
