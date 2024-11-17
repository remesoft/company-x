import React from "react";
import { GreaterThanIcon } from "hugeicons-react";

export const PageHeading = () => {
  return (
    <section className="py-12 bg-stone-200">
      <div className="container w-4/5 mx-auto">
      <nav className="flex text-gray-600 text-sm items-center mb-4" aria-label="Breadcrumb">
        <span>Home</span>
        <GreaterThanIcon className="mx-2" size={15} color="#000000" />
        <span>Services</span>
      </nav>
      <h1 className="text-3xl font-bold mt-2">Service Payment</h1>
      </div>
    </section>
  );
};
