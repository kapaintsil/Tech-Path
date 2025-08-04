import React, { useState } from "react";
import "./index.css";
import "./general.css";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {/* 
        A Project By:
        Name:                 Index Number:       ID:      
        Paintsil Kwame Adonoo          8796521        20833221
        Quarshi  Mary  Hillary         8796821        20862814
        Supervised By:
        Prof. James B. Hayfron-Acquah   
        H.O.D Computer Science Department, KNUST             
      */}
      <div className="header">
        <div className="left-section">
          <img className="codenex-logo" src="images/website-logo.png" alt="website logo" />
          <p className="codenex-logo-name">CodeNex</p>
        </div>
        <div className="middle-section">
          <form className="search-form" action="">
            <input className="search-bar" type="text" placeholder="Search" required />
            <button className="search-icon-button" type="submit">
              <img style={{ height: "15px" }} src="images/search-icon.png" alt="" />
              <div className="tooltip">Search</div>
            </button>
          </form>
        </div>
        <div className="right-section">
          <div>
            <button className="dark-white-mode-button" onClick={handleThemeToggle}>
              <img style={{ height: "40px" }} src="images/dark_white_mode_icon.png" alt="" />
              <div className="tooltip">Theme</div>
            </button>
          </div>
          <div className="dropdown">
            <button className="menu-button">
              <img style={{ height: "40px" }} src="images/menu-icon.png" alt="" />
            </button>
            <div className="dropdown-content">
              <a href="introductiobtoprogramming.html">Introduction To Programming</a>
              <a href="cplusplus.html">C++</a>
              <a href="java.html">Java</a>
              <a href="python.html">Python</a>
              <a href="database.html">Database And SQL</a>
              <a href="html-css.html">HTML And CSS</a>
              <a href="javascript.html">JavaScript</a>
            </div>
          </div>
          <div>
            <a href="index.html">
              <button className="home-icon-button">
                <img style={{ height: "30px" }} src="images/Home-icon.png" alt="" />
                <div className="tooltip">Home</div>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="background">
        <div className="website-name">
          <h1>CodeNex</h1>
        </div>
        <div>
          <h2 className="motto">"Your Programming Support And Resource Web Service"</h2>
        </div>
        <div className="introduction">
          <p>
            Embarking on your programming journey? Look no further. CodeNex is your compass in the realm of programming languages. We're dedicated to laying down the solid foundation you need to understand, embrace, and excel in the world of coding.
          </p>
          <p>
            At CodeNex, we believe that every coder begins with a single step. Our user-friendly platform offers crisp and concise introductions to a variety of programming languages, demystifying the intricacies for beginners. Whether you're intrigued by Python's elegance, JavaScript's versatility, or C++'s power, we've got you covered.
          </p>
          <p>
            But why stop at an introduction? CodeNex takes you beyond the basics. We're your launchpad to an array of handpicked websites and resources that facilitate deeper exploration. These carefully curated materials are your trusted companions on the journey from novice to ninja.
          </p>
        </div>
      </div>
      <section>
        <div>
          <div>
            <h2>Courses:</h2>
          </div>
          <div className="courses">
            <div style={{ display: "flex", direction: "row", justifyContent: "space-evenly" }}>
              <button className="intro-to-programming-button">
                <a href="introductiobtoprogramming.html">
                  <img className="course-logo" src="images/intro-to-programming.png" alt="" />
                  <div className="a-course">Introduction To Programming</div>
                </a>
              </button>
              <button className="cplusplus-button">
                <a href="cplusplus.html">
                  <img className="course-logo" src="images/C++-Logo.png" alt="" />
                  <div className="a-course">Programming With C++</div>
                </a>
              </button>
              <button className="java-button">
                <a href="java.html">
                  <img className="course-logo" src="images/java-logo.png" alt="" />
                  <div className="a-course">Programming With Java</div>
                </a>
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <button className="python-button">
                <a href="python.html">
                  <img className="course-logo" src="images/python-logo.png" alt="" />
                  <div className="a-course"> Programming With Python</div>
                </a>
              </button>
              <button className="database-button">
                <a href="database.html">
                  <img className="course-logo" src="images/sql-logo-2.png" alt="" />
                  <div className="a-course">DataBase and SQL</div>
                </a>
              </button>
              <button className="html-css-button">
                <a href="html-css.html">
                  <img className="course-logo" src="images/html-css-logo.png" alt="" />
                  <div className="a-course">HTML And CSS</div>
                </a>
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <button className="javascript-button">
                <a href="javascript.html">
                  <img className="course-logo" src="images/javascript-logo.png" alt="" />
                  <div className="a-course">JavaScript</div>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>
          A Project By: Paintsil Kwame Adonoo and Quarshie Mary Hillary <br />
          Supervised By: Prof. James Hayfron Aquah <sup>&#174;</sup>
        </p>
        <p>&#169; Copyright 2023 || All Rights Reserved</p>