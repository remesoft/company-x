import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({
  title = null,
  count = 0,
  link = "#",
  image = null,
}) {
  return (
    <Link to={link}>
      <div className="group relative h-[240px] overflow-hidden rounded-lg lg:h-[320px]">
        <img
          src={image}
          alt="category-image"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-110 group-hover:scale-110"
        />
        <div className="absolute inset-0 z-10 bg-black bg-opacity-40 p-3 text-white lg:p-6">
          <h3 className="font-semibold">{title}</h3>
          <p>{count} Services</p>
        </div>
      </div>
    </Link>
  );
}
