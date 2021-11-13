import React from "react";

import "./DemoPages.css";
import TimelineBarHeader from "./TimelineBarHeader";
import { Footer } from "../Home/Footer";

const TodayDemoPage = () => {
  return (
    <div>
      <div className="topHeaderBoxFlexCoursesDisplayPage">
        <img src="/Basic-icons/Back-Icon.png" alt="backIcon" />
        <div className="categoryHeadingCoursesDisplayPage">
          Take a free demo
        </div>
      </div>
      <TimelineBarHeader />

      <div>
        <h1 className="NoActiveLiveSession">No Active Live Sessions</h1>
      </div>
      <Footer />
    </div>
  );
};

export default TodayDemoPage;
