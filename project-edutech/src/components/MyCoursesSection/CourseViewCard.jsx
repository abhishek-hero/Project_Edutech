import React from "react";
import "./CourseViewCard.css";

const CourseViewCard = ({ icon, courseName }) => {
  return (
    <>
      <div className="bigger-box">
        <div className="course-view-card">
          <img className="course-view-card-icon" src={icon} alt="camera-logo" />
          <h3 className="course-view-card-heading">{courseName}</h3>
          <button className="course-view-card-view-button">View</button>
        </div>
      </div>
    </>
  );
};

export default CourseViewCard;
