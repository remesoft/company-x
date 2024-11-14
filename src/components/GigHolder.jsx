import React from "react";
import { Link } from "react-router-dom";

export default function GigHolder() {
  return (
    <section className="py-10 lg:py-16">
      <div className="mx-auto max-w-[1250px] px-2">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold lg:text-2xl">
            Popular Categories
          </h2>
          <Link to="#" className="underline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
