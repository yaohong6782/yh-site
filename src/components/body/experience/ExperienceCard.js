import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ props }) => {
  return (
    <div className="experience-card">
      <label className="experience-title">{props.exp}</label>
      <ul className="list-wrapper">
        <li>
          <div className="experience-department">
            {"Department - "} {props.department}
          </div>
        </li>
        <li>
          <div className="experience-role">
            {"Role - "} {props.role}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ExperienceCard;
