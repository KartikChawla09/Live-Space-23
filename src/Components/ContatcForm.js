import React from "react";
import "./ContactForm.css";
const ContatcForm = () => {
  return (
    <div className="contact-box-main">
      <div className="contact-form">
        <div className="second-container">
          <h2>Send Us A Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name-input">Tell us your name*</label>
              <input
                id="name-input"
                type="text"
                // placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email-input">Enter your email*</label>
              <input
                id="email-input"
                type="text"
                // placeholder="Eg. example@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone-input">Enter phone number*</label>
              <input
                id="phone-input"
                type="text"
                // placeholder="Eg. +1 800 000000"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message-textarea">Message</label>
              <textarea
                id="message-textarea"
                // placeholder="Write us a message"
              ></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
        <div>/*Image*/</div>
      </div>
      <div className="contact-map">
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Vancouver+(Lower Mainland)&amp;t=k&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <div className="info-container">
          <div>
            <h4 className="contact-us-contact-info">Contact Info</h4>
            <h3>Address</h3>
            <p>Lower Mainland, British Columbia</p>
          </div>
          <div>
            <h3>Lets Talk</h3>
            <p>+1 778-384-1100</p>
          </div>
          <div>
            <h3>General Support</h3>
            <p>livespacereno@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatcForm;
