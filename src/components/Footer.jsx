import React from "react";
import {
  ArrowDown01Icon,
  Cancel01Icon,
  GlobeIcon,
  Dollar01Icon,
} from "hugeicons-react";
import { Link } from "react-router-dom";
import CollapsibleMenu from "./ui/CollapsibleMenu";
import logo from "../assets/logo.png";

function Footer() {
  const menuItems = [
    "Writing & Translation",
    "Technology & Programming",
    "Design",
    "Video Photo & Image",
    "Digital Marketing",
    "Social Media",
  ];
  return (
    <section className="dark__bg">
      <div className="footer__top mt-12 pt-4 md:border-b-0">
        <ul>
          <li className="bg-dark">
            <CollapsibleMenu title="Categories" menuItems={menuItems} />
            <CollapsibleMenu title="About" menuItems={menuItems} />
            <CollapsibleMenu title="Service" menuItems={menuItems} />
            <CollapsibleMenu title="Support" menuItems={menuItems} />
            <CollapsibleMenu title="Connect" menuItems={menuItems} />
          </li>
        </ul>
      </div>
      <div className="footer__bottom flex flex-col items-center gap-7 pb-4 text-white">
        <img src={logo} alt="logo" className="mt-4 h-10 text-white" />
        <p>© 2024 RiceTheme. All Right Reserved.</p>
        <div className="flex justify-center gap-5">
          <div className="flex gap-2">
            {" "}
            <GlobeIcon /> English
          </div>
          <div className="flex gap-2">
            {" "}
            <Dollar01Icon /> USD
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
