import React from "react";
import ServiceImage from "../../assets/images/service.webp";
import { Link } from "react-router-dom";
import {
  Clock01Icon,
  EyeIcon,
  ShoppingBasket03Icon,
  StarIcon,
} from "hugeicons-react";

export default function ServiceCard({ data, more = false }) {
  return (
    <div className="group overflow-hidden rounded-md border transition hover:shadow-md hover:shadow-gray-100">
      <div className={`${more ? "h-[12rem]" : "h-36"} w-full overflow-hidden`}>
        <img
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          src={ServiceImage}
          alt="service-image"
        />
      </div>
      <div className="flex flex-col gap-4 px-4 py-4">
        <h3 className="">
          <Link to="#" className="line-clamp-2 font-semibold">
            {data.title}
          </Link>
        </h3>
        {more && (
          <>
            <div className="flex flex-wrap gap-4">
              <p className="flex items-center gap-2">
                <StarIcon size={18} fill="#FFC402" color="#FFC402" />
                {data.rating} &#40;{data.review}&#41;
              </p>
              <p className="flex items-center gap-2">
                <ShoppingBasket03Icon size={18} />
                10 Sold
              </p>
              <p className="flex items-center gap-2">
                <EyeIcon size={18} />
                1400 Views
              </p>
            </div>
            <div className="flex justify-between">
              <p>
                From <span className="font-bold">${data.price}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock01Icon size={18} className="text-[##FFC402]" />
                <strong>10</strong> days
              </p>
            </div>
          </>
        )}

        {!more && (
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2">
              <StarIcon size={18} fill="#FFC402" color="#FFC402" />
              {data.rating} &#40;{data.review}&#41;
            </p>
            <p>
              From <span className="font-bold">${data.price}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
