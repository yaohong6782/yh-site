import React from "react";
import { Carousel } from "bootstrap";
import "./ProjectCard.css";

const ProjectCard = ({ props }) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{props.title}</label>
        <div className="project-links">
          {props.github && (
            <a className="project-link" href={props.github}>
              <div className="link-button">
                <i class="devicon-github-original colored"></i>GitHub
              </div>
            </a>
          )}
        </div>
        <p>{props.about}</p>
        <div className="project-tags">
          {props.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={props.image} className="project-photo" alt=""></img>
    </div>
  );
};

export default ProjectCard;
