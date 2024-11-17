import React from "react";
import { GreaterThanIcon } from "hugeicons-react";

export default function PageHeading() {
  return (
    <section className="bg-stone-200 py-12">
      <div className="container mx-auto w-4/5">
        <nav
          className="mb-4 flex items-center text-sm text-gray-600"
          aria-label="Breadcrumb"
        >
          <span>Home</span>
          <GreaterThanIcon className="mx-2" size={15} color="#000000" />
          <span>Services</span>
        </nav>
        <h1 className="mt-2 text-3xl font-bold">Service Payment</h1>
      </div>
    </section>
  );
}
