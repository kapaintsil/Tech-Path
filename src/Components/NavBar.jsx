import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: "Introduction To Programming", path: "/introtoprogramming" },
    { label: "C++", path: "/cplusplus" },
    { label: "Java", path: "/java" },
    { label: "Python", path: "/python" },
    { label: "Database And SQL", path: "/database" },
    { label: "HTML And CSS", path: "/htmlcss" },
    { label: "JavaScript", path: "/javascript" },
  ];

  return (
    <header className="header">
      <div className="left-section">
        <p className="codenex-logo-name">Tech Path</p>
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
