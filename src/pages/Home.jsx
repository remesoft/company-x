import React from "react";
import Banner from "../components/Banner";
import CategoriesHolder from "../components/CategoriesHolder";
import Testimonial from "../components/Testimonial";
import ServiceSlider from "../components/ServiceSlider";
import LatestProjects from "../components/LatestProjects";
import FAQs from "../components/FAQs";

function Home() {
  return (
    <div>
      <Banner />
      <CategoriesHolder />
      <ServiceSlider />
      <LatestProjects />
      <Testimonial />
      <FAQs />
    </div>
  );
}

export default Home;
