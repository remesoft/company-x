import React from "react";
import Banner from "../components/Banner";
import CategoriesHolder from "../components/CategoriesHolder";
import ServicesHolder from "../components/ServicesHolder";
import avatar from "../assets/images/avatar.jpg";
import TestimonialCard from "../components/ui/TestimonialCard";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <div>
      <Banner />
      <CategoriesHolder />
      <ServicesHolder title="Graphic & Design" />
      <ServicesHolder title="Marketing & Sales" />
      <ServicesHolder title="Photography & Editor" />
      <Testimonial />
    </div>
  );
}

export default Home;
