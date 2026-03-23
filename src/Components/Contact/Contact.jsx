import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>

      {/* FIXED: contact-sections (plural) */}
      <div className="contact-sections">

        {/* LEFT */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to work on new projects. Feel free to
            reach out if you have any questions or would like to collaborate!
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <h3>Email</h3>
              <p>elwintg@gmail.com</p>
            </div>

            <div className="contact-detail">
              <h3>Phone</h3>
              <p>+234(90) 6333-2462</p>
            </div>
          </div>
        </div>

        {/* RIGHT (FORM) */}
        <form className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />

          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />

          <label>Your Message</label>
          <textarea
            placeholder="Enter your message"
            name="message"
            rows="6"
          ></textarea>

          <button className="contact-submit" type="submit">
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;