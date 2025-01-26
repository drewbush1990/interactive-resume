import React from "react";
import AnimatedCard from "./AnimatedCard";
import "./Projects.css"; // Import the new CSS file

export default function Projects() {
  const projects = [
    {
      title: "AI Application & RESTful API for Natural Language Processing",
      description: `
        Developed a scalable AI application with a RESTful API handling 1,000+ daily calls using Python and JavaScript.
        Scoped, designed, and deployed production code with full SDLC ownership and agile methodologies.
        Optimized API performance with multi-threading for application resiliency and data processing.
      `,
    },
    {
      title: "Autonomous Vehicle Research Software Optimization",
      description: `
        Improved software efficiency by 10% through algorithm optimization in Python, C++, and Java.
        Applied multi-threading, parallel programming, and data structures to boost performance and scalability.
        Collaborated with cross-functional teams and conducted peer reviews to enhance quality.
      `,
    },
    {
      title: "Augmented Reality Web Application",
      description: `
        Created an augmented reality web app integrating real-world data using JavaScript, HTML, and Python.
        Enhanced scalability through algorithm design, GPU programming, and parallel processing.
        Ensured a smooth user experience with functional testing and documented workflows.
      `,
    },
  ];

  return (
    <div id="projects" className="projects-container">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <AnimatedCard key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}
