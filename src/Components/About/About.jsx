import React from "react";
import "./About.css";
import profile_img from "../../assets/profile_img.png";

const About = () => {
  return (
    <div id="about" className="about">

      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-sections">
        
        <div className="about-left">
          <div className="about-img-card">
            <img src={profile_img} alt="Profile" />
          </div>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm Emmanuel Ajikanbi, a full-stack developer with a passion for
              creating beautiful, functional websites that provide an excellent
              user experience.
            </p>
            <p>
              My goal is to build websites that are fast, modern, and easy to use
              while constantly growing as a developer.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node.js</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>

      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Years of Experience</p>
        </div>
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <div className="about-achievement">
          <h1>3+</h1>
          <p>Happy Clients</p>
        </div>
      </div>

    </div>
  );
};

export default About;