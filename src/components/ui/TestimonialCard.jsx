import React from "react";

export default function TestimonialCard({ data }) {
  return (
    <div className="mb-4 w-full break-inside-avoid rounded-md bg-[#F8FAFC] p-5">
      <div className="flex items-center gap-4">
        <img className="h-10 rounded-full" src={data.avatar} alt="avatar" />
        <div className="mt-2">
          <h3 className="font-semibold leading-4">{data.name}</h3>
          <small>{data.designation}</small>
        </div>
      </div>
      <p className="mt-2">{data.testimonial}</p>
    </div>
  );
}
