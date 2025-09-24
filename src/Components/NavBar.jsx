import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import websiteNavLogo from '/images/tech-path-navlogo.png'
import ThemeToggle from "./ThemeToggle";
import navItems from "../Data/NavItems";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="left-section">
        <img src={websiteNavLogo} alt="Tech Path Logo" />
      </div>

      <div className="right-section">
        <ThemeToggle />
        {/* Dropdown Menu */}
        <div className="dropdown">
          <div className="menu-button">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="dropdown-content">
            {navItems.map(({ label, path }) => (
              <a key={path} onClick={() => navigate(path)}>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Home Icon */}
        <button className="home-icon-button" onClick={() => navigate("/")}>
          <i className="fa-solid fa-house"></i>
          <div className="tooltip">Home</div>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
