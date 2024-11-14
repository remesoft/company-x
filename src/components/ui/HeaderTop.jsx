import { ArrowDown01Icon, Menu02Icon, Search01Icon } from "hugeicons-react";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/logo.png";

export default function HeaderTop({ setOpenMenu }) {
  const openMenu = () => setOpenMenu(true);
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-[1300px] items-center justify-between px-4">
        <div className="flex items-center gap-2 lg:gap-4">
          <button onClick={openMenu} className="my-2 block p-2 lg:hidden">
            <Menu02Icon size={20} />
          </button>
          <Link to="/">
            <img src={logo} className="h-5" alt="logo" />
          </Link>
          <nav className="hidden lg:flex">
            <ul className="flex gap-4">
              <li className="group relative flex items-center gap-1 py-4">
                <Link to="#" className="-mt-0.5 group-hover:text-blue-600">
                  Demo
                </Link>
                <ArrowDown01Icon size={15} />
                <ul className="absolute left-0 top-full hidden whitespace-nowrap rounded-md border bg-white p-1 shadow-md group-hover:block">
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group relative flex items-center gap-1 py-4">
                <Link to="#" className="-mt-0.5 group-hover:text-blue-600">
                  Categories
                </Link>
                <ArrowDown01Icon size={15} />
                <ul className="absolute left-0 top-full hidden whitespace-nowrap rounded-md border bg-white p-1 shadow-md group-hover:block">
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group relative flex items-center gap-1 py-4">
                <Link to="#" className="-mt-0.5 group-hover:text-blue-600">
                  Listings
                </Link>
                <ArrowDown01Icon size={15} />
                <ul className="absolute left-0 top-full hidden whitespace-nowrap rounded-md border bg-white p-1 shadow-md group-hover:block">
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group relative flex items-center gap-1 py-4">
                <Link to="#" className="-mt-0.5 group-hover:text-blue-600">
                  Pages
                </Link>
                <ArrowDown01Icon size={15} />
                <ul className="absolute left-0 top-full hidden whitespace-nowrap rounded-md border bg-white p-1 shadow-md group-hover:block">
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="-mt-0.5 block rounded-md px-4 py-1 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Freelance - 1
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <form
            action=""
            className="hidden items-center gap-2 rounded-full border bg-slate-50 px-4 py-1 lg:flex"
          >
            <Search01Icon size={18} />
            <input
              className="w-56 bg-transparent placeholder:text-slate-600 focus:outline-none"
              type="text"
              placeholder="Search our services..."
            />
          </form>
          <button className="hidden h-full px-4 py-2 lg:flex">Sign in</button>
          <button className="my-2 block p-2 lg:hidden">
            <Search01Icon size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
