import React from "react";
import "./Styles/Button.css";

export const Button = ({ content }) => {
  return (
    <div>
      <button className="btn_home">{content}</button>
    </div>
  );
};

export default Button;
