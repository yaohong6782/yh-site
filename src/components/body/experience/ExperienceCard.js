import React from "react";

const ExperienceCard = ({ props }) => {
  return (
    <div classname="experience-card">
      <div classname="experience-title">{props.exp}</div>
      <div classname="experience-department">{props.department}</div>
    </div>
  );
};

export default ExperienceCard;
