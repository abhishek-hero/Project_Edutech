import React from "react";
import "./TimelineBarHeader.css";

export const TimelineBarHeader = () => {
  return (
    <div className="Buttonbar_mypr">
      <button className="btn_All">All</button>

      <button className="btn_ong">Today</button>

      <button className="btn_upc">Upcoming</button>

      <button className="btn_completed">Recorded</button>
    </div>
  );
};

export default TimelineBarHeader;
