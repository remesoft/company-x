import React from "react";
import { GlobeIcon, Dollar01Icon } from "hugeicons-react";
import { Link } from "react-router-dom";
import CollapsibleMenu from "./ui/CollapsibleMenu";
import logo from "../assets/logo.png";

function Footer() {
  const menuItems1 = [
    "Writing & Translation",
    "Technology & Programming",
    "Design",
    "Video Photo & Image",
    "Digital Marketing",
    "Social Media",
  ];
  const menuItems2 = ["About Us", "Careers", "Blogs", "FAQs", "Contact Us"];
  const menuItems3 = ["Services", "Projects", "Jobs", "Employers"];
  const menuItems4 = [
    "Privacy Policy",
    "Terms & Conditions",
    "Help & Support",
    "Updates",
    "Documentation",
  ];
  const menuItems5 = [
    "Facebook",
    "Twitter",
    "Instagram",
    "Linkedin",
    "Youtube",
  ];

  return (
    <section className="dark__bg">
      <div className="footer__top mt-12 pt-4 md:border-b-0">
        <ul>
          <li className="bg-dark md:flex md:flex-row md:justify-around">
            <CollapsibleMenu title="Categories" menuItems={menuItems1} />
            <CollapsibleMenu title="About" menuItems={menuItems2} />
            <CollapsibleMenu title="Service" menuItems={menuItems3} />
            <CollapsibleMenu title="Support" menuItems={menuItems4} />
            <CollapsibleMenu title="Connect" menuItems={menuItems5} />
          </li>
        </ul>
      </div>
      <div className="footer__bottom mt-8 flex flex-col items-center justify-around gap-7 border-t-2 border-solid border-gray-800 pb-4 text-white md:flex-row">
        <img src={logo} alt="logo" className="mt-8 h-10 text-white" />
        <p className="mt-8">© 2024 RiceTheme. All Right Reserved.</p>
        <div className="mt-8 flex justify-center gap-5">
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
