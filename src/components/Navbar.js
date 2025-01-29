import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleScroll = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <a href="#about" onClick={(e) => handleScroll(e, "about")}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" onClick={(e) => handleScroll(e, "experience")}>
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
