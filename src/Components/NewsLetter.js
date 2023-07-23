import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="boxe">
      <div className="newsletter-wrapper">
        <div className="newsletter">
          <div className="text">
            <div className="heading">
              <div className="text-wrapper">Stay Up-to-Date</div>
              <div className="text-wrapper text-right-slight">
                With LiveSpace
              </div>
            </div>
            <p className="sign-up-for-our">
              Sign up for our newsletter to stay in the know about our latest
              projects, design insights, and industry news. We&#39;ll deliver
              our best content straight to your inbox.
            </p>
            <div className="email">
              <div className="button">
                <div className="overlap-group">
                  <div className="div-su">Book A Project</div>
                  <div className="rectangle" />
                </div>
              </div>
              {/* <div className="text-wrapper-2">Type your email</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
