import React from "react";
import "./Styles/CarouselCard.css";
import { Link } from "react-router-dom";

export const CarouselCard = ({
  title,
  radius,
  width,
  height,
  svg1,
  svg2a,
  svg2,
  card_footer1,
  card_footer2,
}) => {
  return (
    <>
      <div className="carousel_heading">
        <span className="carousel_title">{title}</span>
        <Link to="/creative-courses-display-page">
          <span className="carousel_link">See All</span>
        </Link>
      </div>

      <div className="carousel_home">
        <span>
          <div
            style={{ borderRadius: radius, width: width, height: height }}
            className="carousel_div"
            alt=""
          >
            <img className="main_svg" src={svg1} alt="" />
            <p className="app_info">{card_footer1}</p>
          </div>
        </span>
        <span>
          <div
            style={{ borderRadius: radius, width: width, height: height }}
            className="carousel_div"
            alt=""
          >
            <img className="main_svg" src={svg2} alt="" />
            <span>
              <img src={svg2a} alt="" />
            </span>
            <p className="app_info">{card_footer2}</p>
          </div>
        </span>
        <span>
          <div
            style={{ borderRadius: radius, width: width, height: height }}
            className="carousel_div"
            alt=""
          ></div>
          <img className="main_svg" src="" alt="" />
        </span>
        <span>
          <div
            style={{ borderRadius: radius, width: width, height: height }}
            className="carousel_div"
            alt=""
          ></div>
          <img className="main_svg" src="" alt="" />
        </span>
        <span>
          <div
            style={{ borderRadius: radius, width: width, height: height }}
            className="carousel_div"
            alt=""
          ></div>
          <img className="main_svg" src="" alt="" />
        </span>
      </div>
    </>
  );
};
