import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src="/contact_me.jpg" alt="Contact Us" className="contact-image" />
        <div className="overlay">
          <div className="text-content">
            {/* <h3>Contact Us</h3> */}
            <div className="play-button">
              <div className="circle">
                <div className="triangle"></div>
              </div>
              <span className="text">Contact US</span>
            </div>


            <p>
              Ask about our platform, pricing, implementation, or anything else.
              Our highly trained reps are ready to help.
            </p>
          </div>
        </div>
      </div>
      <form className="contact-form">
        <div className="form-group">
          <div className="input-field ">
            <label>First name</label>
            <input type="text" placeholder="Marshmelo" />
          </div>
          <div className="input-field name">
            <label>Last name</label>
            <input type="text" placeholder="Telo" />
          </div>
        </div>
        <div className="input-field">
          <label>Email Address <span className="required">*</span></label>
          <input type="email" placeholder="marshmelo56@gmail.com" />
        </div>
        <div className="input-field">
          <label>Phone <span className="required">*</span></label>
          <div className="phone-input">
            <span className="flag">🇮🇳</span>
            <input type="text" placeholder="+91 - 65789 01234" />
          </div>
        </div>
        <div className="input-field">
          <label>Message</label>
          <textarea placeholder=" Hi unfortunately, I don’t have access to my account, please check if there is any problem with my account.">

          </textarea>
        </div>
        <button type="submit" className="send-btn">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
