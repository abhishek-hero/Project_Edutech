import React from "react";
import "./Buttonbar_mypr.css";

export const Buttonbar_mypr = () => {
    return (
        <div className="Buttonbar_mypr">
           <button className="btn_all">All</button>
           <button className="btn_ass">Assigned</button>
           <button className="btn_com">Completed</button>
        </div>
    );
}