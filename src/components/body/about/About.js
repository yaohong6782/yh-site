import React from "react";
import "./About.css";
import codeimg from "../../../images/code-image.png";
import Contact from "../../reusables/Contact";

const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi, I'm <span className="my-name">Yao Hong</span>,<br></br>
          <span className="about-aspire"> an aspiring Software Developer</span>
        </div>
        <div className="about-img">
          <img src={codeimg} alt="" className="own-photo"></img>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default About;
