import React from "react";
import { useNavigate } from "react-router-dom";
import "./CourseSection.css";
import courseList from "../Data/CourseList";

const CoursesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="courses-section">
      <h2 className="section-title">Courses:</h2>
      <div className="courses-grid">
        {courseList.map(({ id, title, logo, route }) => (
          <div
            key={id}
            className={`course-button ${id}-button`}
            onClick={() => navigate(route)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter') navigate(route);
            }}
          >
            <img className="course-logo" src={logo} alt={title} draggable={false} />
            <div className="a-course">{title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
