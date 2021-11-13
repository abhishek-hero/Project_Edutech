import React from "react";
import "./StatusBar.css";
import { Link } from "react-router-dom";

export const StatusBar = () => {
  return (
    <div className="Buttonbar_mypr">
      <Link to="/my-courses-all">
        <button className="btn_All">All</button>
      </Link>
      <Link to="/my-courses-ongoing">
        <button className="btn_ong">Ongoing</button>
      </Link>
      <Link to="/my-courses-upcoming">
        <button className="btn_upc">Upcoming</button>
      </Link>
      <button className="btn_completed">Completed</button>
    </div>
  );
};

export default StatusBar;
