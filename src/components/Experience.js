import React from "react";
import AnimatedCard from "./AnimatedCard";
import "./Experience.css"; // Add this to import the new CSS file

export default function Experience() {
  const experiences = [
    {
      role: "Student Software Engineering Intern",
      company: "Levrum Data Technologies",
      description: `Collaborated to deploy an AI bot executing trading strategies with reinforcement learning, achieving a 10% increase in trading accuracy. Managed cloud engineering with AWS and SSH EC2 instances, reducing runtime by 41% using CUDA GPUs. Coordinated backend-to-frontend integration and enhanced UI for improved user experience and system resilience.`,
      date: "April 2024 - June 2024",
    },
  ];

  return (
    <div id="experience" className="experience-container">
      <h2 className="experience-header">Experience</h2>
      <div className="experience-content">
        {experiences.map((exp, index) => (
          <AnimatedCard key={index}>
            <h3 className="experience-role">{exp.role}</h3>
            <h4 className="experience-company">{exp.company}</h4>
            <p className="experience-description">{exp.description}</p>
            <p className="experience-date">{exp.date}</p>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}
