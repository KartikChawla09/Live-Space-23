import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div>
      <h2 className="news-heading">Know About Us</h2>
      <div className="news-content-box">
        <div className="image-place-holder"></div>
        <div className="news-text-box">
          <p className="news-line1">Follow our Instagram handle to stay in the know about our latest projects, design insights, and industry news.</p>
          <h5 className="text-subhead">We'll deliver our best content straight to your inbox.</h5>
          <div className="insta-handle">
            <p className="insta-page"><a href="" className="insta-id">Talk to us</a></p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default NewsLetter;
