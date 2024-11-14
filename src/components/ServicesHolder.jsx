import React from "react";
import ServiceCard from "./ui/ServiceCard";
import { Link } from "react-router-dom";

export default function ServicesHolder({ title }) {
  return (
    <section className="pt-10 lg:pt-16">
      <div className="mx-auto max-w-[1250px] px-2">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold lg:text-2xl">{title}</h2>
          <Link to="#" className="underline">
            View All Services
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3 lg:mt-8 lg:grid-cols-4 lg:gap-6">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
  );
}
