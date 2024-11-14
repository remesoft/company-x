import React, { useState } from "react";
import HeaderTop from "./ui/HeaderTop";
import HeaderBottom from "./ui/HeaderBottom";
import MobileMenu from "./ui/MobileMenu";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <React.Fragment>
      <HeaderTop {...{ setOpenMenu }} />
      <HeaderBottom />
      <MobileMenu {...{ openMenu, setOpenMenu }} />
    </React.Fragment>
  );
}

export default Header;
