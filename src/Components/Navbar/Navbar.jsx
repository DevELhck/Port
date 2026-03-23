import React, { useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => setMobileMenu(!mobileMenu);

  const handleScroll = (sectionId) => {
    setMenu(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenu(false); // Close mobile menu after clicking
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">My Portfolio</div>

      {/* Menu Icon */}
      <img
        src={menu_icon}
        alt="menu"
        className="menu-icon"
        onClick={toggleMenu}
      />

      {/* Navigation Menu */}
      <ul className={`nav-menu ${mobileMenu ? "mobile-open" : ""}`}>
        <li
          className={menu === "home" ? "active" : ""}
          onClick={() => handleScroll("home")}
        >
          Home
        </li>
        <li
          className={menu === "about" ? "active" : ""}
          onClick={() => handleScroll("about")}
        >
          About Me
        </li>
        <li
          className={menu === "services" ? "active" : ""}
          onClick={() => handleScroll("services")}
        >
          Services
        </li>
        <li
          className={menu === "portfolio" ? "active" : ""}
          onClick={() => handleScroll("portfolio")}
        >
          Portfolio
        </li>
        <li
          className={menu === "contact" ? "active" : ""}
          onClick={() => handleScroll("contact")}
        >
          Contact
        </li>
      </ul>

      <div className="nav-connect">Connect With Me</div>
    </nav>
  );
};

export default Navbar;