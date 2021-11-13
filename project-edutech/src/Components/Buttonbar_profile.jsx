import React from "react";
import "./Buttonbar_profile.css";

export const Buttonbar_profile = () => {
    return (
        <div className="Buttonbar_mypr">
           <button className="btn_All">All</button>
           <button className="btn_ong">Ongoing</button>
           <button className="btn_upc">Upcoming</button>
           <button className="btn_completed">Completed</button>
        </div>
    );
}