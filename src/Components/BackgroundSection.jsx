import React from "react";
import "./BackgroundSection.css"; 
import paragraph from "../Data/HomeCards";
import websiteLogo from '/images/tech-path-logo.png'

const BackgroundSection = () => (
  <div className="background">
    <div className="website-logo">
      <img src={websiteLogo} alt="Tech Path Logo" />
    </div>
    <div>
      <h2 className="motto">
        "Your Programming Support And Resource Web Service"
      </h2>
    </div>
    <div className="introduction">
      {paragraph.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  </div>
);

export default BackgroundSection;