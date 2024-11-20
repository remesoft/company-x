import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

export default function Gallery({ images, sliderId }) {
  const mainSliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);

  useEffect(() => {
    // Sync the sliders after mounting
    if (mainSliderRef.current && thumbnailSliderRef.current) {
      const main = mainSliderRef.current.splide;
      const thumbnails = thumbnailSliderRef.current.splide;

      if (main && thumbnails) {
        main.sync(thumbnails);
      }
    }
  }, []);

  return (
    <div>
      {/* Main Slider */}
      <Splide
        id={`${sliderId}-main`}
        options={{
          type: "fade",
          heightRatio: 0.5,
          pagination: false,
          arrows: false,
          cover: true,
        }}
        ref={mainSliderRef}
      >
        {images.map((image, index) => (
          <SplideSlide key={index} className="rounded-lg">
            <img
              src={image}
              alt={`Main slide ${index + 1}`}
              className="h-full w-full"
            />
          </SplideSlide>
        ))}
      </Splide>

      {/* Thumbnail Slider */}
      <Splide
        id={`${sliderId}-thumbnail`}
        options={{
          fixedWidth: 100,
          fixedHeight: 64,
          isNavigation: true,
          gap: "1rem",
          focus: "left",
          pagination: false,
          cover: true,
        }}
        ref={thumbnailSliderRef}
        className="mt-4"
      >
        {images.map((image, index) => (
          <SplideSlide key={index} className="overflow-hidden rounded-lg">
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="h-full w-full"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
