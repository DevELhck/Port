import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="Profile" />
      <h1>
        <span>Hey! i'm a Web Developer.</span>
      </h1>
      <p>
        I create beautiful, functional websites that provide an excellent user
        experience. I am passionate about learning new technologies and staying
        up-to-date with the latest trends in web development.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">View Resume</div>
      </div>
    </div>
  );
};

export default Hero;
