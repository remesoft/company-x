import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQs from "../components/FAQs";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <FAQs />
      <Footer />
    </>
  );
}

export default MainLayout;
