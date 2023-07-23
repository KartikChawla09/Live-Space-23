import React, { useState } from "react";
import "./Navbar.css";
import CompanyLogo from "../assets/company.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleParagraphClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="box">
      <div className="navbar-logo">
        <img src={CompanyLogo} alt="logo" />
      </div>
      <div className={`navbar-headings ${menuOpen ? "visible" : ""}`}>
        <p onClick={handleParagraphClick}>
          <a href="#home">Home</a>
        </p>
        <p className="slash">/</p>
        <p onClick={handleParagraphClick}>
          <a href="#services">AboutUs</a>
        </p>
        <p className="slash">/</p>
        <p onClick={handleParagraphClick}>
          <a href="#projects">Services</a>
        </p>
        <p className="slash">/</p>
        <p onClick={handleParagraphClick}>
          <a href="#contact">Contact Us</a>
        </p>
      </div>
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
