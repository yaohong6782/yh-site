import React from "react";
import Spacer from "../../reusables/separator/Spacer";
import ExperienceCard from "./ExperienceCard";
import "./ExperienceCard.css";
const Work = () => {
  const ExpList = [
    {
      id: 1,
      exp: "Onwards Media Group Pte Ltd",
      department: "Freeboh",
      role: "Intern Software Developer",
    },
    {
      id: 2,
      exp: "Changi Airport Group",
      department: "IOT Student Project with CAG",
      role: "Student Software Developer",
    },
  ];

  return (
    <div classname="experiences">
    <Spacer />
    <label className="section-title">Experiences</label>
      <div>
        {ExpList.map((item, id) => {
          return (
            <div key={id}>
              <ExperienceCard props={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
