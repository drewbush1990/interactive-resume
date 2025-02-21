import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        <h1>Hi, I'm Andrew Bush</h1>
        <h2>Software Engineer | AI Enthusiast | Problem Solver</h2>
        <a href="#projects" className="hero-button">
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;