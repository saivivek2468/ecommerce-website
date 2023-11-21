import React from "react";
import Hero from "../components/Hero";
import Category from "../components/Category";
import Gear from "../components/Gear";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import Header from "../components/Header";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Cards />
      <Category />
      <Gear />
      <Footer />
      <GoToTop />
    </>
  );
};

export default Home;
