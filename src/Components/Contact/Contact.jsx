import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "67595ca5-b716-4643-a034-b3f327ad28cf"); // Your valid key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult("Error: " + data.message);
        console.log("Error", data);
      }
    } catch (error) {
      setResult("Something went wrong. Try again later.");
      console.error(error);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>

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
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />

          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required />

          <label>Your Message</label>
          <textarea
            placeholder="Enter your message"
            name="message"
            rows="6"
            required
          ></textarea>

          <button className="contact-submit" type="submit">
            Send Message
          </button>

          {/* Feedback message */}
          {result && <p className="contact-result">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;