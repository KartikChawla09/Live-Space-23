import React, { useEffect } from "react";
import "./NewsLetter.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { duration } from "@mui/material";

const NewsLetter = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="newsletter-content-box">
      <h2 className="news-heading" data-aos="fade-right">
        Know About Us
      </h2>
      <div className="news-content-box">
        <div className="image-place-holder" data-aos="fade-right"></div>
        <div className="news-text-box" data-aos="fade-left">
          <p className="news-line1">
            Follow our Instagram handle to stay in the know about our latest
            projects, design insights, and industry news.
          </p>
          <h5 className="text-subhead">
            We'll deliver our best content straight to your inbox.
          </h5>
          <div className="insta-handle">
            <p className="insta-page">
              <a
                href="https://www.instagram.com/livespace.ca/"
                className="insta-id"
              >
                Talk to us
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
