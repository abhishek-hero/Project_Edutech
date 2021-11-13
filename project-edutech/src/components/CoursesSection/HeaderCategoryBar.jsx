import React from "react";
import "./CoursesCategoryBar.css";
import { Link } from "react-router-dom";

export const HeaderCategoryBar = () => {
  return (
    <div className="Buttonbar_mypr">
      <button className="btn_All">All</button>

      <button className="btn_ong">Creative</button>

      <button className="btn_upc">Technical</button>

      {/* <Link to="/courses-all">
        <button className="btn_All">All</button>
      </Link>

      <Link to="/courses-creative">
        <button className="btn_ong">Creative</button>
      </Link>
      <Link to="/courses-technical">
        <button className="btn_upc">Technical</button>
      </Link> */}
    </div>
  );
};

export default HeaderCategoryBar;
