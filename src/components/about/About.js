import React from "react";
import "./About.css"; 
import vim from '../../images/vim.png'

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about">
        <h2>Hi, I'm</h2>
        <h1>Yao Hong</h1>
        <h2>an aspiring Software Developer</h2>
      </div>
      <img src={vim} alt="myImage" className="vim-img"></img>
    </div>
  );
};

export default About;
