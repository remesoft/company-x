import React from "react";
import CategoryCard from "./ui/CategoryCard";
import { Link } from "react-router-dom";
import CategoryImage from "../assets/images/category.jpg";

export default function CategoriesHolder() {
  return (
    <section className="pt-10 lg:pt-16">
      <div className="mx-auto max-w-[1250px] px-2">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold lg:text-2xl">
            Popular Categories
          </h2>
          <Link to="#" className="underline">
            View All Services
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3 lg:mt-8 lg:grid-cols-5 lg:gap-6">
          <CategoryCard
            title="Graphic & Design"
            count={3}
            link="#"
            image={CategoryImage}
          />
          <CategoryCard
            title="Video & Animation"
            count={10}
            link="#"
            image={CategoryImage}
          />
          <CategoryCard
            title="Writing & Translation"
            count={8}
            link="#"
            image={CategoryImage}
          />
          <CategoryCard
            title="Programming & Tech"
            count={14}
            link="#"
            image={CategoryImage}
          />
          <CategoryCard
            title="Marketing & Sales"
            count={4}
            link="#"
            image={CategoryImage}
          />
        </div>
      </div>
    </section>
  );
}
