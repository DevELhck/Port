import React from "react";
import "./About.css";
// import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from "../../assets/profile_img.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        {/* <img src={theme_pattern} alt=''/> */}
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm Emmanuel Ajikanbi, a frontend developer with a passion for creating beautiful,
              functional websites that provide an excellent user experience.
              With over 3 years of experience in the industry, I have a strong
              understanding of HTML, CSS, JavaScript, and various frontend
              frameworks such as React and Vue.js.
            </p>
            <p>
              My goal is to create websites that not only look great but also
              perform well and are easy to use. I am always looking for new
              challenges and opportunities to learn and grow as a developer.
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
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
