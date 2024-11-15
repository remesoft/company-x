import React from "react";

export default function TestimonialCard({
  avatar,
  name,
  designation,
  testimonial,
}) {
  return (
    <div className="mb-4 break-inside-avoid rounded-md bg-[#F8FAFC] p-5">
      <div className="flex items-center gap-4">
        <img className="h-10 rounded-full" src={avatar} alt="avatar" />
        <div className="mt-2">
          <h3 className="font-semibold leading-4">{name}</h3>
          <small>{designation}</small>
        </div>
      </div>
      <p className="mt-2">{testimonial}</p>
    </div>
  );
}
