import React from "react";
import Spacer from "../../reusables/separator/Spacer";
import "./Tech.css";

const Tech = () => {
  const TechList = [
    {
      id: 1,
      type: "Programming Languages",
      languageList: [
        {
          name: "Python",
          icon: <i class="devicon-python-plain-wordmark colored"></i>,
        },
      ],
    },
  ];
  return (
    <div className="tech">
      <Spacer />
      <label className="section-title">Technologies</label>
      <div></div>
    </div>
  );
};

export default Tech;
