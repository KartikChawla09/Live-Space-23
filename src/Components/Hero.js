import React, { useEffect } from "react";
import "./Hero.css";
import arrow from "../assets/StartProject.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { duration } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="hero-bg">
      <Navbar></Navbar>
      <div data-aos="zoom-in">
        <div className="tagline">
          <h1 className="heading">Transforming Spaces, Transforming Lives</h1>
        </div>
        <div className="sub-text1">
          <div className="sub-text-holder1">
            <p className="sub-heading-1">
              Welcome to Live Space, a full-service architecture and interior
              design firm. We specialize in creating beautiful, functional
              spaces that reflect your unique style and personality. Let us help
              you transform your space into a work of art.
            </p>
            <Link className="btn-link" to="/contact">
              <button className="project-button">
                Start a Project
                <img
                  className="arrow-project"
                  src={arrow}
                  alt="arrow-proj"
                ></img>
              </button>
            </Link>
          </div>
        </div>
        <div className="down-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="53"
            viewBox="0 0 39 53"
            fill="none"
          >
            <path
              d="M21.178 51.9291L37.803 35.3041C38.2357 34.8562 38.475 34.2563 38.4696 33.6336C38.4642 33.0108 38.2144 32.4152 37.7741 31.9748C37.3338 31.5345 36.7381 31.2847 36.1154 31.2793C35.4926 31.2739 34.8927 31.5133 34.4448 31.9459L21.8739 44.5168L21.8739 2.75C21.8739 2.12011 21.6237 1.51602 21.1783 1.07062C20.7329 0.625222 20.1288 0.374999 19.4989 0.374999C18.869 0.374999 18.2649 0.625222 17.8195 1.07062C17.3741 1.51602 17.1239 2.12011 17.1239 2.75L17.1239 44.5168L4.55304 31.9459C4.33395 31.719 4.07188 31.5381 3.78212 31.4136C3.49237 31.2892 3.18072 31.2236 2.86537 31.2209C2.55001 31.2182 2.23728 31.2783 1.9454 31.3977C1.65352 31.5171 1.38835 31.6934 1.16535 31.9164C0.942355 32.1394 0.766001 32.4046 0.646586 32.6965C0.527167 32.9884 0.467078 33.3011 0.469817 33.6165C0.472559 33.9318 0.538077 34.2435 0.66255 34.5332C0.78702 34.823 0.967951 35.085 1.19478 35.3041L17.8198 51.9291C18.2652 52.3744 18.8691 52.6245 19.4989 52.6245C20.1287 52.6245 20.7327 52.3744 21.178 51.9291Z"
              fill="#636363"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
