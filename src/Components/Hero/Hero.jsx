import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";

const Hero = () => {
  return (
    <div id="home" className="hero">
      
      <div className="hero-img-wrapper">
        <img src={profile_img} alt="Profile" />
      </div>

      <h1>
        <span>Hey! I'm a Web Developer.</span>
      </h1>

      <p>
        I create beautiful, functional websites that provide <br /> an excellent user
        experience. I am passionate <br /> about learning new technologies and staying<br />
        up-to-date with the latest trends in <br/> web development.
      </p>

      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">View Resume</div>
      </div>
    </div>
  );
};

export default Hero;