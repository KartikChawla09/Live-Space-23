import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import house from "../assets/houseLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Add event listener to close the menu when clicking outside of it
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleParagraphClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="box" ref={menuRef}>
      <div className="navbar-logo">
        <img src={house} alt="logo" />
        <p className="ls-text-first">Live Space Renovations</p>
        <p className="ls-text-second">LS</p>
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
