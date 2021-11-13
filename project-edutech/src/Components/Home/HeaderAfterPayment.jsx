import React from "react";
import "./Styles/Header.css";

export const HeaderAfterPayment = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_left">
        <small>Hello</small>
        <strong>Muskan!</strong>
      </div>

      <div className="navbar_right">
        <span>
          <img className="top_icons" src="/Icons/search.svg" alt="" />
        </span>
        <span>
          <img className="top_icons" src="/Icons/bell.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
