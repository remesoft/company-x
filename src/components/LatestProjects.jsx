import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ui/ProjectCard";

export default function LatestProjects() {
  return (
    <section className="mt-16">
      <div className="mx-auto max-w-[1250px] px-2">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-xl font-semibold lg:text-2xl">Latest Project</h2>
          <Link to="#" className="underline">
            View All Services
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}
