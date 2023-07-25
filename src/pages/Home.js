import React from "react";

import "./Home.css";
import Hero from "../Components/Hero";
import FAQ from "./FAQ";
import Values from "../Components/Values";
import Stats from "../Components/Stats";
import Clients from "../Components/Clients";
import OurServices from "../Components/OurServices";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div>
      <Hero />
      <FAQ />
      <Values />
      <Stats />
      <Clients />
      <OurServices />
      <Footer />
    </div>
  );
};

export default Home;
