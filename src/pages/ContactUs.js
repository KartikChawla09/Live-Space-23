import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./ContactUs.css";
import ContatcForm from "../Components/ContatcForm";
import NewsLetter from "../Components/NewsLetter";
const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <ContatcForm />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ContactUs;
