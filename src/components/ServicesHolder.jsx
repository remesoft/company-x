import React, { useEffect, useRef } from "react";
import ServiceCard from "./ui/ServiceCard";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function ServicesHolder({ title, index }) {
  const splideRef = useRef(null);

  const options = {
    perPage: 4,
    gap: "1rem",
    breakpoints: {
      1024: {
        perPage: 3,
      },
      768: {
        perPage: 1,
      },
    },
  };

  return (
    <section className="relative pt-10 lg:pt-16">
      <div className="mx-auto max-w-[1250px] px-2">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold lg:text-2xl">{title}</h2>
          <Link to="#" className="underline">
            View All Services
          </Link>
        </div>
        <Splide
          ref={splideRef}
          options={options}
          className={`relative mt-4 lg:mt-8 splide-instance-${index}`} // Unique class for each instance
        >
          <SplideSlide>
            <ServiceCard />
          </SplideSlide>
          <SplideSlide>
            <ServiceCard />
          </SplideSlide>
          <SplideSlide>
            <ServiceCard />
          </SplideSlide>
          <SplideSlide>
            <ServiceCard />
          </SplideSlide>
          <SplideSlide>
            <ServiceCard />
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}
