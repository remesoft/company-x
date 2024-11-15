import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown01Icon, ArrowUp01Icon } from "hugeicons-react";

const CollapsibleMenu = ({ title, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Collapsible menu for small screens */}
      <details className="my-4 block md:hidden">
        <summary className="flex list-none items-center justify-between gap-2 rounded-md px-4 py-2">
          <h3 className="text-xl text-slate-200">{title}</h3>
          <button onClick={toggleBtn} className="font-semibold text-slate-200">
            {isOpen ? (
              <ArrowUp01Icon size={20} />
            ) : (
              <ArrowDown01Icon size={20} />
            )}
          </button>
        </summary>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="border-slate-400">
              <Link className="block px-4 py-2 text-slate-200 hover:text-slate-100">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </details>

      {/* Expanded list for large screens */}
      <ul className="my-4 hidden flex-col md:block">
      <h3 className="text-xl text-slate-200 md:mb-4">{title}</h3>
        {menuItems.map((item, index) => (
          <li key={index} className="border-slate-400">
            <Link className="block px-4 py-2 text-slate-200 hover:text-slate-100">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CollapsibleMenu;
