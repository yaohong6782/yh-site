import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ props }) => {
  return (
    <div className="experience-card">
        <label className="experience-title">{props.exp}</label>
      <div className="experience-department">{"Department - "} {props.department}</div>
    </div>
  );
};

export default ExperienceCard;
