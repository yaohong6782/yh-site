import React from "react";
import "./About.css";
import vim from "../../images/vim.png";
import bg from "../../images/code-image.png";

const About = () => {
  return (
    <div className="main-container">
      <div className="left-side">
        <div className="left-wrapper">
          <h2 classname="left-name">Hi, I am</h2>
          <h1 className="name">Yao Hong</h1>
          <div classname="left-desc">An aspiring Software Developer</div>
        </div>
      </div>

      <div classname="right-side">
      
        <img src={vim} alt="myImage" className="vim-img"></img>
      </div>
    </div>
  );
};

export default About;
