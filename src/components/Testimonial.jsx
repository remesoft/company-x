import React, { useState } from "react";
import TestimonialCard from "./ui/TestimonialCard";
import testimonials from "../data/testimonials";

export default function Testimonial() {
  // states
  const [expend, seExpend] = useState(false);

  // methods
  const toggleExpend = () => {
    seExpend(!expend);
  };

  return (
    <div className="mt-28">
      <div className="mx-2 max-w-[1150px] lg:mx-auto">
        <h1 className="text-center text-2xl font-bold lg:text-4xl">
          “What Client Say About Us”
        </h1>
        <p className="mt-2 text-center">
          There is some post in social media about us.
        </p>
        <div
          className={`relative mt-10 ${expend ? "h-auto" : "h-[450px]"} columns-1 gap-4 overflow-hidden md:columns-2 lg:columns-3`}
        >
          {testimonials.map((data, index) => (
            <TestimonialCard data={data} />
          ))}
          <div
            className={`absolute bottom-0 left-0 flex h-[200px] w-full justify-center bg-gradient-to-t from-white to-transparent`}
          >
            <button
              onClick={toggleExpend}
              className="self-end rounded-full bg-slate-800 px-6 py-2 text-white"
            >
              {expend ? "Okay, I got the point." : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
