import React, { useRef } from "react";
import services from "../data/services";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ServiceCard from "./ui/ServiceCard";

export default function ServiceSlider() {
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
    <div className="relative">
      <div className="mx-auto max-w-[1250px] px-2">
        {services.map((service, index) => (
          <section key={index} className="mt-16">
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-xl font-semibold lg:text-2xl">
                {service.title}
              </h2>
              <Link to="#" className="underline">
                View All Services
              </Link>
            </div>
            <Splide
              ref={splideRef}
              options={options}
              className={`relative splide-instance-${index}`}
            >
              {service.gig.map((gig, index) => (
                <SplideSlide key={index}>
                  <ServiceCard data={gig} />
                </SplideSlide>
              ))}
            </Splide>
          </section>
        ))}
      </div>
    </div>
  );
}
