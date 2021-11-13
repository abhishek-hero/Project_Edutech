import React, { useState } from "react";
import "./CoursePage.css";
import { Button } from "../Home/Button";
import { Overview } from "./Overview";
import { BookDemo } from "./BookDemo";
import { Footer } from "../Home/Footer";
import { Link } from "react-router-dom";

function CoursePage() {
  const [overvies, setOverview] = useState(true);
  return (
    <div>
      <div className="top-section">
        <div className="buy-now-btn">
          <Link to="/Payment_page1">
            <Button content="Buy Now" />
          </Link>
        </div>
      </div>
      <div className="demos-video">
        <img src="./Images/demo-videos.png" />
      </div>
      <div className="overview-book">
        <a onClick={() => setOverview(true)}>Over View</a>
        <a onClick={() => setOverview(false)}>Book a Demo</a>
      </div>
      <div className="book-demos">{overvies ? <Overview /> : <BookDemo />}</div>
      <Footer />
    </div>
  );
}

export { CoursePage };
