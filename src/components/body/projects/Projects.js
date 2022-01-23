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
      tags: ["ReactJS", "Hooks", "Props"],
      github: "",
      image: faimg1,
    },
    {
      id: 2,
      title: "Weather Display app",
      about:
        "Utilise APIs and React Components to displays the current Weather on the respective location base on the user input",
      tags: ["ReactJS", "API"],
      github: "https://github.com/yaohong6782/React-WeatherApp",
      image: waimg1,
    },
  ];
  return (
    <div className="projects">
      <label className="section-title">Things I've tried making </label>
      <div>
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
