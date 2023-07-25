import React, { useEffect } from "react";
import "./ContactForm.css";
import image from "../assets/contact.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { duration } from "@mui/material";
const ContatcForm = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="contact-box-main" data-aos="zoom-in">
      <div className="contact-form">
        <div className="photo-for-contact">
          <img className="kenburns-top" src={image} alt="ContactUs"></img>
        </div>
        <div className="second-container">
          <h2>Send Us A Message</h2>
          <form>
            <div className="form-group">
              <label data-aos="zoom-in" htmlFor="name-input">
                Tell us your name*
              </label>
              <input
                id="name-input"
                type="text"
                // placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label data-aos="zoom-in" htmlFor="email-input">
                Enter your email*
              </label>
              <input
                id="email-input"
                type="text"
                // placeholder="Eg. example@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label data-aos="zoom-in" htmlFor="phone-input">
                Enter phone number*
              </label>
              <input
                id="phone-input"
                type="text"
                // placeholder="Eg. +1 800 000000"
                required
              />
            </div>
            <div className="form-group">
              <label data-aos="zoom-in" htmlFor="message-textarea">
                Message
              </label>
              <textarea
                id="message-textarea"
                // placeholder="Write us a message"
              ></textarea>
            </div>
            <div className="submit-box-contact">
              <button data-aos="zoom-in">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="contact-map" data-aos="zoom-in">
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Vancouver+(Lower Mainland)&amp;t=k&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <div className="info-container">
          <div>
            <h4 className="contact-us-contact-info" data-aos="zoom-in">
              Contact Info
            </h4>
            <h3 data-aos="zoom-in">Address</h3>
            <p data-aos="zoom-in">Lower Mainland, British Columbia</p>
          </div>
          <div>
            <h3 data-aos="zoom-in">Lets Talk</h3>
            <p data-aos="zoom-in"> +1 778-384-1100</p>
          </div>
          <div>
            <h3 data-aos="zoom-in">General Support</h3>
            <p data-aos="zoom-in">livespacereno@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatcForm;
