import React from "react";
import image from "../../assets/images/banners/banner.png";
import logo from "../../assets/images/avatar.jpg";
import { Clock01Icon, Contact01Icon, Tag01Icon } from "hugeicons-react";
import { Link } from "react-router-dom";

export default function ProjectCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg lg:flex-row">
      <img
        className="h-44 w-full lg:h-full lg:w-1/3"
        src={image}
        alt="Card Image"
      />
      <div className="rounded-md rounded-t-none border border-t-0 p-4 lg:rounded-l-none lg:border-l-0 lg:border-t">
        <div className="mb-2 flex items-center gap-2">
          <img className="h-8 w-8 rounded-full" src={logo} alt="logo" />
          <p className="font-bold">Nagarro</p>
        </div>
        <p className="mb-4 font-semibold">
          Write professional resume, cover letter, and linkedin writing services
        </p>
        <div className="mb-4 flex flex-wrap gap-x-2">
          <span className="flex items-center gap-2">
            <Tag01Icon size={18} /> Resume Writing
          </span>
          <span className="flex items-center gap-2">
            <Clock01Icon size={18} /> 3 months ago
          </span>
          <span className="flex items-center gap-2">
            <Contact01Icon size={18} /> 4 sent proposal
          </span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p>Min</p>
            <strong className="text-lg">$10</strong>/hour
          </div>
          <Link
            to="#"
            className="rounded-md border px-4 py-2 transition hover:bg-slate-100"
          >
            Send Proposals
          </Link>
        </div>
      </div>
    </div>
  );
}
