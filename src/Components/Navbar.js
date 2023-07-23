import React, { useState } from "react";
import "./Navbar.css";
import CompanyLogo from "../assets/company.png";
import { Link } from "react-router-dom";

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
        <p className="navbar-tem" onClick={handleParagraphClick}>
          <Link to="/">Home</Link>
        </p>
        <p className="slash">/</p>
        <p className="navbar-tem" onClick={handleParagraphClick}>
          <Link to="/about">About Us</Link>
        </p>
        <p className="slash">/</p>
        <p className="navbar-tem" onClick={handleParagraphClick}>
          <Link to="/services">Services</Link>
        </p>
        <p className="slash">/</p>
        <p className="navbar-tem" onClick={handleParagraphClick}>
          <Link to="/contact">Contact Us</Link>
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
