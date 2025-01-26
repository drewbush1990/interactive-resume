import React, { useState } from "react";

export default function InteractiveResumeSPA() {
  const [activeSection, setActiveSection] = useState("about");

  const sections = {
    about: (
      <div>
        <h2>About Me</h2>
        <p>
          I am a software engineer passionate about building scalable, innovative solutions. With experience in AI, backend systems, and cloud technologies, 
          I bring a detail-oriented and problem-solving mindset to every project.
        </p>
      </div>
    ),
    projects: (
      <div>
        <h2>Projects</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '15px 0', padding: '15px', border: '1px solid #444', borderRadius: '5px', backgroundColor: '#222' }}>
            <h3 style={{ color: '#00d8ff' }}>AI Application & RESTful API for NLP</h3>
            <p>
              Developed a scalable AI application handling 1,000+ daily calls using Python and JavaScript. Implemented backend APIs and cloud-based databases to enhance resilience and scalability.
            </p>
          </li>
          <li style={{ margin: '15px 0', padding: '15px', border: '1px solid #444', borderRadius: '5px', backgroundColor: '#222' }}>
            <h3 style={{ color: '#00d8ff' }}>Autonomous Vehicle Research Software Optimization</h3>
            <p>
              Improved algorithm performance by 10% using Python, C++, and Java. Focused on data structures and optimization for computer vision algorithms.
            </p>
          </li>
          <li style={{ margin: '15px 0', padding: '15px', border: '1px solid #444', borderRadius: '5px', backgroundColor: '#222' }}>
            <h3 style={{ color: '#00d8ff' }}>Augmented Reality Web Application</h3>
            <p>
              Created an AR app integrating real-world data using JavaScript, Python, and Groovy. Designed scalable, interactive frontend-to-backend systems.
            </p>
          </li>
        </ul>
      </div>
    ),
    contact: (
      <div>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:drewbush1990@gmail.com" style={{ color: '#00d8ff', textDecoration: 'none' }}>drewbush1990@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/andrew-bush-22b09148" style={{ color: '#00d8ff', textDecoration: 'none' }}>Andrew Bush</a></p>
      </div>
    )
  };

  const techLogos = [
    { name: "Python", url: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
    { name: "JavaScript", url: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "C++", url: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
    { name: "React", url: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', color: '#ddd', backgroundColor: '#121212', padding: '20px', borderRadius: '8px' }}>
      <header style={{ textAlign: 'center', padding: '20px 0', borderBottom: '2px solid #00d8ff' }}>
        <h1 style={{ fontSize: '2.5em', color: '#00d8ff' }}>Andrew Bush</h1>
        <p style={{ fontSize: '1.2em', color: '#aaa' }}>Software Engineer | AI Enthusiast | Problem Solver</p>
      </header>

      <nav style={{ textAlign: 'center', margin: '20px 0' }}>
        <button
          style={{
            margin: '0 10px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: activeSection === 'about' ? '#00d8ff' : '#333',
            color: activeSection === 'about' ? '#121212' : '#ddd',
            border: '2px solid #00d8ff',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => setActiveSection("about")}
        >
          About Me
        </button>
        <button
          style={{
            margin: '0 10px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: activeSection === 'projects' ? '#00d8ff' : '#333',
            color: activeSection === 'projects' ? '#121212' : '#ddd',
            border: '2px solid #00d8ff',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => setActiveSection("projects")}
        >
          Projects
        </button>
        <button
          style={{
            margin: '0 10px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: activeSection === 'contact' ? '#00d8ff' : '#333',
            color: activeSection === 'contact' ? '#121212' : '#ddd',
            border: '2px solid #00d8ff',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => setActiveSection("contact")}
        >
          Contact
        </button>
      </nav>

      <main style={{ margin: '20px 0' }}>
        {sections[activeSection]}
      </main>

      <footer style={{ textAlign: 'center', marginTop: '30px' }}>
        <h3 style={{ color: '#00d8ff', marginBottom: '10px' }}>Technologies</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {techLogos.map((logo) => (
            <div key={logo.name} style={{ textAlign: 'center' }}>
              <img src={logo.url} alt={logo.name} style={{ width: '50px', height: '50px', marginBottom: '5px' }} />
              <p style={{ fontSize: '12px', color: '#ddd' }}>{logo.name}</p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
