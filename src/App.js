import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import SkillsCarousel from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <main>
      <Navbar />
      <About />
      <Experience />
      <SkillsCarousel />
      <Projects />
      <Contact />
      </main>
    </div>
  );
}

export default App;
