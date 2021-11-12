import React from "react";
import CourseViewCard from "./CourseViewCard";
import StatusBar from "../Course-status-bar/StatusBar";
import MyCoursesHeading from "../My-courses-heading/MyCoursesHeading";

const MyCoursesUpcoming = () => {
  return (
    <div>
      <MyCoursesHeading />
      <StatusBar />
      <CourseViewCard
        icon="/Course-icons/Camera-icon.png"
        courseName="Photography"
      />
    </div>
  );
};

export default MyCoursesUpcoming;
