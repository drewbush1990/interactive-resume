import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsCarousel from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Load dark mode preference from localStorage (if exists), otherwise default to true
  const storedMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(
    storedMode ? JSON.parse(storedMode) : true
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }

    // Save preference to localStorage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <button onClick={toggleDarkMode} className="mode-toggle">
        {darkMode ? "🌙"  :"🌞" }
      </button>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SkillsCarousel />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
