import React from "react";
import "./Web.css";
function Web() {
  return (
    <div className="web">
      <div className="web-options">
        <a href="#project">
          <i class="fi fi-rr-calculator option-icon"></i>Personal Project
        </a>
      </div>
      <div className="web-options">
        <a href="#tech">
          <i class="fi fi-rr-browser option-icon"></i>Technologies
        </a>
      </div>
      <div className="web-options">
        <a href="#education">
          <i class="fi fi-rr-graduation-cap option-icon"></i>Education
        </a>
      </div>
      <div className="web-options">
        <a href="#experience">
        <i class="fi fi-rr-briefcase option-icon"></i>Experience
        </a>
      </div>
    </div>
  );
}

export default Web;
