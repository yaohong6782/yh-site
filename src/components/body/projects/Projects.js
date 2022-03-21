import React from "react";

import waimg1 from "../../../images/weather-app1.jpg";
import faimg1 from "../../../images/foodapp1.jpg";
import ProjectCard from "./ProjectCard";
import Spacer from "../../reusables/separator/Spacer";

import "./Project.css";

const Projects = () => {
  const ProjectList = [
    {
      id: 1,
      title: "Food Order page",
      about:
        "Single Food Order webpage displaying a list of items with corresponding outputs",
      objective:
        "Diving deeper into React Hooks, Passing of Props and Components",
      tags: ["ReactJS"],
      github: "",
      image: faimg1,
    },
 
  ];
  return (
    <div className="projects">
      
      <div>
      <label className="section-title">Things I've tried making with React </label>
        {ProjectList.map((item, id) => {
          return (
            <div key={id}>
              <Spacer />
              <ProjectCard props={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
