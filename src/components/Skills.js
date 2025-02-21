import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Skills.css";

export default function SkillsCarousel() {
  const skills = [
    { name: "Python", url: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
    { name: "JavaScript", url: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "C++", url: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
    { name: "React", url: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    { name: "Java", url: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div id="skills" className="skills-carousel-container">
      <h2 className="skills-header glowing-text">Technical Skills</h2>
      <div className="skills-carousel">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img
                src={skill.url}
                alt={skill.name}
                className="skill-image"
              />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
