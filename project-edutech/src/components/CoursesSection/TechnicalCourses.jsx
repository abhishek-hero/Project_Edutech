import React, { useState } from "react";
import CourseViewCard from "./CourseViewCard";
import HeaderCategoryBar from "./HeaderCategoryBar";
import CourseData from "../../CourseData";
import "./CoursesSectionHeading.css";

const TechnicalCourses = () => {
  const [allCourseData, setAllCourseData] = useState(CourseData);
  return (
    <div>
      <div>
        <div className="topHeaderBoxFlexCoursesDisplayPage">
          <img src="/Basic-icons/Back Icon.png" alt="backIcon" />
          <div className="categoryHeadingCoursesDisplayPage">Cousres</div>
        </div>
        <HeaderCategoryBar />

        {allCourseData.map((item, index) => {
          //   console.log(item);
          if (item.category === "Technical") {
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
    </div>
  );
};

export default TechnicalCourses;
