import React from "react";

import waimg1 from "../../../images/weather-app1.jpg";
import waimg2 from "../../../images/weather-app2.jpg";
import faimg1 from "../../../images/foodapp1.jpg";
import ProjectCard from "./ProjectCard";
import Spacer from "../../reusables/separator/Spacer";
import VerticalSpacer from "../../reusables/separator/VerticalSpacer";

const Projects = () => {
  const ProjectList = [
    {
      id: 1,
      title: "Food Ordering App",
      about:
        "Food Ordering Page displaying a list of items with corresponding outputs",
      objective:
        "Diving deeper into React Hooks, Passing of Props and Components",
      tags: ["ReactJS", "Hooks", "Props"],
      github: "",
      image: faimg1,
    },
    {
      id: 2,
      title: "React Weather App",
      about:
        "Displays the current Weather on the respective location base on the user input",
      objective: "Utilise APIs and React Components",
      tags: ["ReactJS", "API"],
      github: "https://github.com/yaohong6782/React-WeatherApp",
      image: waimg1,
    },
  ];
  return (
    <div className="projects">
      <Spacer />
      <label className="section-title">Projects</label>
      <div>
        {ProjectList.map((item, id) => {
          return (
            <div>
              <ProjectCard props={item} key={id} />
              <Spacer />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
