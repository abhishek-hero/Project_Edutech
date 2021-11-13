import React, { useState } from "react";
import "./TechnicalCoursesDisplayPage.css";
import courseData from "../../CourseData";
import { Footer } from "../Home/Footer";

const TechnicalCoursesDisplayPage = () => {
  const [itemData, setItemData] = useState(courseData);

  return (
    <div>
      <div className="topHeaderBoxFlexCoursesDisplayPage">
        <img src="/Basic-icons/Back-Icon.png" alt="backIcon" />
        <div className="categoryHeadingCoursesDisplayPage">
          Technical Courses
        </div>
      </div>

      <div className="biggerContentBoxGridCoursesDisplayPage">
        {itemData.map((item, index) => {
          if (item.category === "Technical") {
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
          }
        })}
      </div>
      <Footer />
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
    </div>
  );
};

export default TechnicalCoursesDisplayPage;
