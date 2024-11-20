import { InformationCircleIcon, StarIcon } from "hugeicons-react";
import React from "react";
import ReviewCard from "./ui/ReviewCard";

export default function Review() {
  return (
    <div className="">
      <h3 className="mb-2 text-2xl font-bold">Reviews</h3>
      {/* Overall Rating */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-2 rounded-md bg-blue-100 px-4 py-2">
          <span className="text-2xl font-semibold text-blue-600">4.3</span>
          <StarIcon size={20} fill="#2563eb" className="text-blue-600" />
        </div>
        <p className="text-sm text-gray-600">Base on 1 reviews</p>
      </div>

      {/* Ratings Breakdown */}
      <div className="mt-4 grid grid-cols-2 gap-6">
        <div>
          <div className="mb-2 flex items-center justify-between text-gray-600">
            <span>Salary &amp; Benefits</span>
            <InformationCircleIcon size={15} />
          </div>
          <div className="relative">
            <div className="h-1 rounded-full bg-gray-200">
              <div className="h-1 w-full rounded-full bg-blue-600" />
            </div>
            <span className="absolute right-0 top-3 text-xs text-gray-600">
              5.00
            </span>
          </div>
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between text-gray-600">
            <span>Salary &amp; Benefits</span>
            <InformationCircleIcon size={15} />
          </div>
          <div className="relative">
            <div className="h-1 rounded-full bg-gray-200">
              <div className="h-1 w-full rounded-full bg-blue-600" />
            </div>
            <span className="absolute right-0 top-3 text-xs text-gray-600">
              5.00
            </span>
          </div>
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between text-gray-600">
            <span>Salary &amp; Benefits</span>
            <InformationCircleIcon size={15} />
          </div>
          <div className="relative">
            <div className="h-1 rounded-full bg-gray-200">
              <div className="h-1 w-full rounded-full bg-blue-600" />
            </div>
            <span className="absolute right-0 top-3 text-xs text-gray-600">
              5.00
            </span>
          </div>
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between text-gray-600">
            <span>Salary &amp; Benefits</span>
            <InformationCircleIcon size={15} />
          </div>
          <div className="relative">
            <div className="h-1 rounded-full bg-gray-200">
              <div className="h-1 w-full rounded-full bg-blue-600" />
            </div>
            <span className="absolute right-0 top-3 text-xs text-gray-600">
              5.00
            </span>
          </div>
        </div>
      </div>
      <ReviewCard />
    </div>
  );
}
