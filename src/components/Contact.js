import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div id="contact" className="contact-container">
      <h2 className="projects-header glowing-text">Let's Work Together</h2>
      <p className="contact-text">
        Interested in working with me? Let’s create something amazing together!
      </p>
      <a href="mailto:andrewbush.tech@gmail.com" className="contact-button">
        Contact Me
      </a>
    </div>
  );
}
