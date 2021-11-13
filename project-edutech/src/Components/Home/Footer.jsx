import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <div className="footer_icons1 footer_icons">
          <img src="/Icons/explore.svg" alt="" />
          <p>Explore</p>
        </div>
      </Link>
      <Link to="/my-courses-all">
        <div className="footer_icons2 footer_icons">
          <img src="/Icons/Icon-My-Courses.png" alt="" />
          <p>My Courses</p>
        </div>
      </Link>

      <Link>
        <div className="footer_icons3 footer_icons">
          <img src="/Icons/myProjects.svg" alt="" />
          <p>My Projects</p>
        </div>
      </Link>
      <Link to="/community">
        <div className="footer_icons4 footer_icons">
          <img src="/Icons/Icon-Community.png" alt="" />
          <p>Community</p>
        </div>
      </Link>
      <Link>
        <div className="footer_icons5 footer_icons">
          <img src="/Icons/Icon-Profile.png" alt="" />
          <p>Profile</p>
        </div>
      </Link>
    </div>
  );
};

export default Footer;
