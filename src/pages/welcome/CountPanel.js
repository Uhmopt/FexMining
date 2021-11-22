import { Grid } from "@mui/material";
import image from "assets/img/back/2.jpg";
import CountCard from "components/CountCard";
import RawImage from "components/RawImage";
import React from "react";
import { countCards } from "./data/countCards";

export default function CountPanel() {
  return (
    <div className="w-full relative">
      <RawImage className="absolute h-full w-full object-cover" src={image} />
      <div className="relative h-full w-full flex flex-col justify-center items-center py-40 bg-black bg-opacity-30">
        <Grid container spacing={5}>
          {countCards.map((card, cardIndex) => (
            <Grid key={cardIndex} item lg={3} md={3} sm={6} xs={12}>
              <CountCard
                icon={card?.icon ?? ""}
                title={card?.title ?? ""}
                value={card?.value}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
