import React from "react";
import "./TimelineBarHeader.css";
import { Link } from "react-router-dom";

export const TimelineBarHeader = () => {
  return (
    <div className="Buttonbar_mypr">
      <Link to="/all-free-demo">
        <button className="btn_All">All</button>
      </Link>

      <Link to="/today-free-demo">
        <button className="btn_ong">Today</button>
      </Link>

      <Link to="/upcoming-free-demo">
        <button className="btn_upc">Upcoming</button>
      </Link>

      <Link to="/recorded-free-demo">
        <button className="btn_completed">Recorded</button>
      </Link>
    </div>
  );
};

export default TimelineBarHeader;
