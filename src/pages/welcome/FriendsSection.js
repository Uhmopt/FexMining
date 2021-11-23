import { Container, Grid } from "@mui/material";
import RawImage from "components/RawImage";
import React from "react";
import { logos } from "./data/logos";

export default function FriendsSection() {
  return (
    <div className="my-12 w-full">
      <Container>
        <Grid container spacing={5} wrap="nowrap">
          {[...logos, ...logos].map((logo, logoIndex) => (
            <Grid key={logoIndex} item lg={3} md={3} sm={4} xs={4}>
              <RawImage
                className="border-2 border-gray-500 p-4"
                src={logo ?? ""}
                alt="logo"
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
