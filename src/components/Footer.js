import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/drewbush1990/" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/andrew-bush-22b09b148/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
      <p>© 2024 Andrew Bush. All rights reserved.</p>
    </footer>
  );
};

export default Footer;