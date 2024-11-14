import React from "react";
import { Link } from "react-router-dom";

export default function HeaderBottom() {
  return (
    <section className="hidden border-b lg:block">
      <div className="mx-auto max-w-[1300px] px-4">
        <ul className="flex gap-7">
          <li className="group">
            <Link className="block py-2 transition group-hover:text-blue-600">
              Graphic & Design
            </Link>
          </li>
          <li className="group">
            <Link className="block py-2 transition group-hover:text-blue-600">
              AI Services
            </Link>
          </li>
          <li className="group">
            <Link className="block py-2 transition group-hover:text-blue-600">
              Marketing & Sales
            </Link>
          </li>
          <li className="group">
            <Link className="block py-2 transition group-hover:text-blue-600">
              Programming & Tech
            </Link>
          </li>
          <li className="group">
            <Link className="block py-2 transition group-hover:text-blue-600">
              Photography & Editor
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
