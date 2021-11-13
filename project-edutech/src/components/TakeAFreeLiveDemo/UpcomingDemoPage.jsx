import React from "react";

import "./DemoPages.css";
import TimelineBarHeader from "./TimelineBarHeader";
import { Footer } from "../Home/Footer";

const UpcomingDemoPage = () => {
  return (
    <div>
      <div className="topHeaderBoxFlexCoursesDisplayPage">
        <img src="/Basic-icons/Back-Icon.png" alt="backIcon" />
        <div className="categoryHeadingCoursesDisplayPage">
          Take a free demo
        </div>
      </div>
      <TimelineBarHeader />

      <div className="CardsContainer">
        <div
          style={{ position: "relative" }}
          className="CardBox"
          // style={{ backgroundImage: "url(/Images/photography-bg-image.png)" }}
        >
          <div
            className="bg-img"
            style={{
              width: "363px",
              height: "206px",
              position: "relative",
              backgroundImage: "url(/Images/photography-bg-image.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              filter: "brightness(50%)",
            }}
          ></div>
          <div style={{ position: "absolute" }} className="DataTimeLiveFlex">
            <div className="date-time-heading">31st,December,6:00PM</div>
            <button className="live-button">Live</button>
          </div>
          <div style={{ position: "absolute" }} className="DetailsFlex">
            <div className="instructor_main_div">
              <img src="/Images/instructor-pic.png" alt="mentor" />
              <div className="instructor_name">Sai Pallavi</div>
              <div className="instructor_profession">Content Writer</div>
            </div>
            <div className="CardHeading">Mostly used camera by experts</div>
          </div>
          <div className="shareIcon">
            <img src="/Basic-icons/Share-icon.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpcomingDemoPage;
