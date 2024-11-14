import React from "react";
import Banner from "../components/Banner";
import CategoriesHolder from "../components/CategoriesHolder";
import ServicesHolder from "../components/ServicesHolder";

function Home() {
  return (
    <div>
      <Banner />
      <CategoriesHolder />
      <ServicesHolder title="Graphic & Design" />
      <ServicesHolder title="Marketing & Sales" />
      <ServicesHolder title="Photography & Editor" />
    </div>
  );
}

export default Home;
