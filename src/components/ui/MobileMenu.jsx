import React from "react";
import { ArrowDown01Icon, Cancel01Icon } from "hugeicons-react";
import { Link } from "react-router-dom";

export default function MobileMenu({ openMenu, setOpenMenu }) {
  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <aside
      className={`fixed top-0 z-50 h-screen w-screen transform transition-all duration-300 lg:hidden ${
        openMenu
          ? "translate-x-0 bg-opacity-75 opacity-100"
          : "-translate-x-full bg-opacity-0 opacity-0"
      } bg-black`}
    >
      <div className="h-screen w-[70%] overflow-y-auto border-r bg-white">
        <div className="flex w-full items-center justify-between border-b px-4 py-4">
          <Link to="/sign-in">Sign In</Link>
          <button onClick={toggleMenu} aria-label="Close Menu">
            <Cancel01Icon />
          </button>
        </div>
        <div className="border-b py-4">
          <details>
            <summary class="flex list-none items-center gap-2 rounded-md px-4 py-2 hover:bg-gray-100">
              Home
              <ArrowDown01Icon size={10} />
            </summary>
            <ul className="bg-gray-100">
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
            </ul>
          </details>
          <details>
            <summary class="flex list-none items-center gap-2 rounded-md px-4 py-2 hover:bg-gray-100">
              Listing
              <ArrowDown01Icon size={10} />
            </summary>
            <ul className="bg-gray-100">
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
            </ul>
          </details>
          <details>
            <summary class="flex list-none items-center gap-2 rounded-md px-4 py-2 hover:bg-gray-100">
              Users
              <ArrowDown01Icon size={10} />
            </summary>
            <ul className="bg-gray-100">
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
            </ul>
          </details>
          <details>
            <summary class="flex list-none items-center gap-2 rounded-md px-4 py-2 hover:bg-gray-100">
              Pages
              <ArrowDown01Icon size={10} />
            </summary>
            <ul className="bg-gray-100">
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
            </ul>
          </details>
          <details>
            <summary class="flex list-none items-center gap-2 rounded-md px-4 py-2 hover:bg-gray-100">
              Blogs
              <ArrowDown01Icon size={10} />
            </summary>
            <ul className="bg-gray-100">
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:text-blue-600">
                  Freelance - 1
                </Link>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </aside>
  );
}
