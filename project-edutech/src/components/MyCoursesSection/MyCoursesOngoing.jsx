import React from "react";
import CourseViewCard from "./CourseViewCard";
import StatusBar from "../Course-status-bar/StatusBar";
import MyCoursesHeading from "../My-courses-heading/MyCoursesHeading";
import { Footer } from "../Home/Footer";

const MyCoursesOngoing = () => {
  return (
    <div>
      <MyCoursesHeading />
      <StatusBar />
      <CourseViewCard
        icon="/Course-icons/Graphic-design-icon.png"
        courseName="Graphic Design"
      />
      <CourseViewCard
        icon="/Course-icons/Android-icon.png"
        courseName="Android Dev"
      />
      <Footer />
    </div>
  );
};

export default MyCoursesOngoing;
