import React from "react";
import "./BookDemo.css";
import { Button } from "../Home/Button";

function BookDemo() {
  return (
    <div>
      <div className="bd-head">
        <h3>Pick a slot</h3>
      </div>
      <div className="demos-box">
        <h2>31st December, 6:00PM</h2>
        <div className="lives-btn">LIVE</div>
      </div>
      <div className="demos-box">
        <h2>31st December, 6:00PM</h2>
        <div className="lives-btn">LIVE</div>
      </div>
      <div className="demos-box">
        <h2>31st December, 6:00PM</h2>
        <div className="lives-btn">LIVE</div>
      </div>
      <div className="demos-box">
        <h2>31st December, 6:00PM</h2>
        <div className="lives-btn">LIVE</div>
      </div>
      <div className="demos-box">
        <h2>31st December, 6:00PM</h2>
        <div className="lives-btn">LIVE</div>
      </div>
      <Button content="Confirm" />
    </div>
  );
}

export { BookDemo };
