import React from "react";
import CourseViewCard from "./CourseViewCard";
import StatusBar from "../Course-status-bar/StatusBar";
import MyCoursesHeading from "../My-courses-heading/MyCoursesHeading";

const MyCoursesAll = () => {
  return (
    <div>
      <MyCoursesHeading />
      <StatusBar />
      <CourseViewCard
        icon="/Course-icons/Camera-icon.png"
        courseName="Photography"
      />
      <CourseViewCard
        icon="/Course-icons/Graphic-design-icon.png"
        courseName="Graphic Design"
      />
      <CourseViewCard
        icon="/Course-icons/Android-icon.png"
        courseName="Android Dev"
      />
    </div>
  );
};

export default MyCoursesAll;