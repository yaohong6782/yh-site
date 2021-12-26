import React from "react";
import Spacer from "../../reusables/separator/Spacer";
import TechCard from "../../reusables/tech-card/TechCard";
import "./Tech.css";

const Tech = () => {
  const TechList = [
    {
      id: 1,
      type: "Programming Languages",
      languageList: [
        {
          name: "Python",
          icon: <i class="devicon-python-plain colored"></i>,
        },
        {
          name: "Java",
          icon: <i class="devicon-java-plain colored"></i>,
        },
        {
            name: "JavaScript",
            icon: <i class="devicon-javascript-plain colored"></i>,
          },
      ],
    },

  ];
  return (
    <div className="tech">
      <Spacer />
      <label className="section-title">Skills</label>
      <div className="tech-container">
        {TechList.map((item) => {
          return (
            <div className="tech-section">
              <label>{item.type}</label>
              <div className="tech-list">
                {item.languageList.map((item) => {
              
                  return <TechCard props={item} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;
