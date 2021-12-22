import React from "react";
import About from "./about/About";
import Education from "./education/Education";
import Projects from "./projects/Projects";
import Experience from "./experience/Experience";
import "./Body.css";
const Body = () => {
  return (
    <div className="body">
      this is body
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="project">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
    </div>
  );
};

export default Body;
