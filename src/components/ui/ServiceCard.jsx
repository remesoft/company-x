import React from "react";
import ServiceImage from "../../assets/images/service.webp";
import { Link } from "react-router-dom";
import { StarIcon } from "hugeicons-react";

export default function ServiceCard() {
  return (
    <div className="group overflow-hidden rounded-md border transition hover:shadow-md hover:shadow-gray-100">
      <div className="h-36 w-full overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          src={ServiceImage}
          alt="service-image"
        />
      </div>
      <div className="px-4 py-4">
        <h3 className="mb-5">
          <Link to="#" className="font-semibold">
            I will craft engaging social media marketing, copywriting
          </Link>
        </h3>
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2">
            <StarIcon size={18} fill="#FFC402" color="#FFC402" />0 &#40;0&#41;
          </p>
          <p>
            From <span className="font-bold">$250</span>
          </p>
        </div>
      </div>
    </div>
  );
}
