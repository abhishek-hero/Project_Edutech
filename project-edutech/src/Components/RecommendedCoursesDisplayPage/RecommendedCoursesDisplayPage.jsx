import React, { useState } from "react";
import "./RecommendedCoursesDisplayPage.css";
import courseData from "../../CourseData";
import { Footer } from "../Home/Footer";

const RecommendedCoursesDisplayPage = () => {
  const [itemData, setItemData] = useState(courseData);

  return (
    <div>
      <div className="topHeaderBoxFlexCoursesDisplayPage">
        <img src="/Basic-icons/Back-Icon.png" alt="backIcon" />
        <div className="categoryHeadingCoursesDisplayPage">
          Recommended Courses
        </div>
      </div>

      <div className="biggerContentBoxGridCoursesDisplayPage">
        {itemData.slice(0, 6).map((item, index) => {
          return (
            <div className="smallerContentBoxGrid" key={index}>
              <img
                className="courseIconCoursesDisplayPage"
                src={item.image}
                alt="course-image"
              />
              <div className="courseNameCoursesDisplayPage">
                {item.course_name}
              </div>
            </div>
          );
        })}
      </div>
      {/* btrbrjncejcrmrmevkrmvmkmbktmbktmkbmktmkmskmxskmckmdkmcvdkmvmbvjnjtkemdmkewd,xl */}
      {/* <div className="biggerContentBoxGridCoursesDisplayPage">
        {itemData.map((item, index) => (
          <div className="smallerContentBoxGrid" key={index}>
            <img
              className="courseIconCoursesDisplayPage"
              src={item.image}
              alt="course-image"
            />
            <div className="courseNameCoursesDisplayPage">
              {item.course_name}
            </div>
          </div>
        ))}
      </div> */}
      <Footer />
    </div>
  );
};

export default RecommendedCoursesDisplayPage;
