import React from "react";
import banner from "../assets/images/banners/banner.png";
import { Search01Icon } from "hugeicons-react";

function Banner() {
  return (
    <section
      style={{ backgroundImage: `url(${banner})` }}
      className="items-center bg-cover bg-center"
    >
      <div className="mx-auto grid max-w-[1200px] bg-black bg-opacity-45 px-4 lg:bg-opacity-0">
        <div className="flex h-[500px] w-full flex-col justify-center lg:w-[70%]">
          <h1 className="text-4xl font-semibold leading-tight text-white lg:text-6xl">
            Find the best
            <br />
            <span className="font-dmSerif font-light italic">
              Freelancers&nbsp;
            </span>
            services
          </h1>
          <p className="my-2 text-white opacity-80 lg:text-lg">
            We are offering 1200+ service for you.
          </p>
          <form action="" className="mt-2 flex w-[90%] lg:w-[65%]">
            <div className="flex flex-grow items-center rounded-l-full bg-white pl-2 lg:pl-4">
              <Search01Icon className="h-5 lg:h-6" />
              <input
                type="text"
                placeholder="Search service title..."
                className="ml-4 w-20 flex-grow bg-transparent focus:outline-none lg:py-2"
              />
            </div>

            <input
              type="submit"
              value="Search"
              className="h-full rounded-r-full bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700 lg:py-4"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Banner;
