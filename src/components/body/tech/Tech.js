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
    {
      id: 2,
      type: "Technologies",
      languageList: [
        {
          name: "ReactJS",
          icon: (
            <img
              src="https://img.icons8.com/office/40/000000/react.png"
              alt="react-img"
            />
          ),
        },
        {
          name: "Flask",
          icon: <i class="devicon-flask-original colored"></i>,
        },
        {
          name: "Git",
          icon: <i class="devicon-git-plain colored"></i>,
        },
      ],
    },
  ];
  return (
    <div className="tech">
      <Spacer />
      <label className="section-title">Skills</label>
      <div className="tech-container">
        {TechList.map((item, idx) => {
          return (
            <div className="tech-section" key={item.id}>
              <label className="tech-section-title">{item.type}</label>
              <div className="tech-list">
                {item.languageList.map((item, idx) => {
                  return <TechCard props={item} key={idx} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="icons-credit">
        <i>Icons from <a href="https://icons8.com/icon/bzf0DqjXFHIW/react">Icons8</a></i>
      </div>
    </div>
  );
};

export default Tech;
