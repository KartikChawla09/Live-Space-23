
import React from "react";
import "./About.css";
import AboutHeading from "../Components/AboutHeading";
import AboutServices from "../Components/AboutServices";
import WhyChooseUs from "../Components/WhyChooseUs";
import AboutOurTeam from "../Components/AboutOurTeam";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import GoToTop from "./goToTop";

const About = () => {
  return (
    <div className="container-about">
      <GoToTop></GoToTop>
      <AboutHeading></AboutHeading>
      <AboutOurTeam></AboutOurTeam>
      <WhyChooseUs></WhyChooseUs>
      <AboutServices></AboutServices>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default About;
