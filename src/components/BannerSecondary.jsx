import React from "react";
import { Search01Icon } from "hugeicons-react";
import banner from "../assets/images/banners/banner-02.webp";

export default function BannerSecondary() {
  return (
    <section
      style={{ backgroundImage: `url(${banner})` }}
      className="flex h-[300px] items-center"
    >
      <div className="mx-auto w-[1250px] px-4">
        <h1 className="mb-4 text-3xl font-semibold text-white">
          Service Listing
        </h1>
        <form
          action=""
          className="flex flex-grow items-center rounded-lg bg-white pl-4"
        >
          <Search01Icon />
          <input
            type="text"
            placeholder="Search title or keyword"
            className="ml-5 w-5 flex-grow bg-transparent py-4 focus:outline-none"
          />
          <input
            type="submit"
            value="Search"
            className="rounded-r-lg bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
          />
        </form>
      </div>
    </section>
  );
}
