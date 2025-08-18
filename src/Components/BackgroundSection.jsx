import React from "react";
import "./BackGroundSection.css"; // Adjust the path as necessary

const BackgroundSection = () => (
  <div className="background">
    <div className="website-name">
      <h1>Tech Path</h1>
    </div>
    <div>
      <h2 className="motto">
        "Your Programming Support And Resource Web Service"
      </h2>
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
);

export default BackgroundSection;