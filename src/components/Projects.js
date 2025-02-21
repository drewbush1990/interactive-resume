import React from "react";
import AnimatedCard from "./AnimatedCard";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Natural Language Processing Microservice",
      description: `
Developed a Flask-based microservice that retrieves Wikipedia summaries and integrates them into AI-generated
responses.
Designed an efficient request pipeline, handling structured search queries and processing data into JSON responses.
Integrated OpenAI’s GPT model, enabling context-aware content generation by enriching responses with Wikipedia
data.
Built a user-friendly front-end with Flask, enhancing usability and real-time interaction.
Implemented robust API request handling with error handling and automated JSON data parsing, ensuring high
response reliability.
      `,
    },
    {
      title: "Autonomous Vehicle Research Software Optimization",
      description: `
Enhanced computer vision algorithms in Python, improving software efficiency on testing simulation.
Conducted peer code reviews and collaborated with cross-functional teams to refine and validate research-driven
improvements.
Documented system enhancements, ensuring knowledge transfer for continued optimization in autonomous vehicle
applications.
      `,
    },
  ];

  return (
    <div id="projects" className="projects-container">
      <h2 className="projects-header glowing-text">Projects</h2>
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
