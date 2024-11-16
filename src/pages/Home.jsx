import React from "react";
import Banner from "../components/Banner";
import CategoriesHolder from "../components/CategoriesHolder";
import ServicesHolder from "../components/ServicesHolder";
import avatar from "../assets/images/avatar.jpg";
import TestimonialCard from "../components/ui/TestimonialCard";
import Testimonial from "../components/Testimonial";
import Services from "../components/ServiceSlider";
import ServiceSlider from "../components/ServiceSlider";

function Home() {
  return (
    <div>
      <Banner />
      <CategoriesHolder />
      <ServiceSlider />
      <Testimonial />
    </div>
  );
}

export default Home;
