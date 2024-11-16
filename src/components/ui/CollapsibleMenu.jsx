import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown01Icon, ArrowUp01Icon } from "hugeicons-react";

const CollapsibleMenu = ({ title, menuItems, textColor, border, mode = "responsive" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault(); 
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Collapsible menu */}
      <details
        className={`my-4 ${mode === "responsive" ? "md:hidden" : ""} ${border}`}
        open={isOpen}
      >
        <summary
          onClick={toggleMenu}
          className="flex items-center justify-between px-4 py-2 cursor-pointer rounded-md"
        >
          <h3 className={`text-xl ${textColor}`}>{title}</h3>
          <button className={`ml-2 ${textColor}`}>
            {isOpen ? <ArrowUp01Icon size={20} /> : <ArrowDown01Icon size={20} />}
          </button>
        </summary>
        <ul
          className={`transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="border-slate-400">
              <Link className={`block px-4 py-2 ${textColor} hover:text-slate-100`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </details>

      {/* Expanded list for large screens */}
      {mode === "responsive" && (
        <ul className="my-4 hidden md:block">
          <h3 className={`text-xl ${textColor} mb-4`}>{title}</h3>
          {menuItems.map((item, index) => (
            <li key={index} className="border-slate-400">
              <Link className={`block px-4 py-2 ${textColor} hover:text-slate-100`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CollapsibleMenu;
