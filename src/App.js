import React, { useState } from "react";
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
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("light-mode");
      root.classList.remove("dark-mode");
    } else {
      root.classList.add("dark-mode");
      root.classList.remove("light-mode");
    }
  };

  return (
    <div>
      <button onClick={toggleDarkMode} className="mode-toggle">
        {darkMode ? "🌙" : "🌞" }
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
