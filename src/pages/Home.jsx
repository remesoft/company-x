import React from "react";
import Banner from "../components/Banner";
import CategoryHolder from "../components/CategoryHolder";
import GigHolder from "../components/GigHolder";

function Home() {
  return (
    <div>
      <Banner />
      <CategoryHolder />
      <GigHolder />
    </div>
  );
}

export default Home;
