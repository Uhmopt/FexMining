import { formatArray } from "lib/arrayObject";
import React from "react";
import { Slide, Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function CustomSlide({ data = [], variant = "slide" }) {
  const SlideContainer = variant === "fade" ? Fade : Slide;

  return (
    <div className="slide-container relative">
      <SlideContainer>
        {formatArray(data).map((item, index) => (
          <div className="each-slide" key={index}>
            {item}
          </div>
        ))}
      </SlideContainer>
    </div>
  );
}
