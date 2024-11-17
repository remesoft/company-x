import React, { useEffect } from "react";
import BannerSecondary from "../components/BannerSecondary";
import ServiceManager from "../components/ServiceManager";

export default function Services() {
  return (
    <React.Fragment>
      <BannerSecondary />
      <ServiceManager />
    </React.Fragment>
  );
}
