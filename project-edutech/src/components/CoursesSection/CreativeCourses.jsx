import React, { useState } from "react";
import CourseViewCard from "./CourseViewCard";
import HeaderCategoryBar from "./HeaderCategoryBar";
import CourseData from "../../CourseData";
import "./CoursesSectionHeading.css";
import { Footer } from "../Home/Footer";

const CreativeCourses = () => {
  const [allCourseData, setAllCourseData] = useState(CourseData);
  return (
    <div>
      <div>
        <div className="topHeaderBoxFlexCoursesDisplayPage">
          <img src="/Basic-icons/Back-Icon.png" alt="backIcon" />
          <div className="categoryHeadingCoursesDisplayPage">Courses</div>
        </div>
        <HeaderCategoryBar />

        {allCourseData.map((item, index) => {
          //   console.log(item);
          if (item.category === "Creative") {
            return (
              <CourseViewCard
                key={index}
                icon={item.image}
                courseName={item.course_name}
              />
            );
          }
        })}
      </div>
      <Footer />
    </div>
  );
};

export default CreativeCourses;
