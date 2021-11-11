import React from 'react'
import "./GigsDetail.css"
import {Footer} from "./Footer"

function InternshipDetails() {
    return (
        <div>
          <div className="gigs"></div>
          <div className="gigs-div">
              <div className="intern-name">Internship Name</div>
              <div className="intern-title">About the Internship</div>
              <div className="gigs-detail">
               <p> Lorem ipsum dolor sit amet, consectetur elit.<br/>
                 Proin finibus vitae turpis non iaculis. 
                 Quisque<br/> nec erat eu diam egestas dapibus nec
                  non ante<br/> adipiscing Vivamus molestie sodales congue.<br/>
                   Aenean tincidunt erat non nulla iaculis, non<br/> pretium odio feugiat.</p>
              </div>
              <div className="calendar">
              <span>
              <img src="/Images/calendar.png" alt="calender"/>
              <p>Last date to apply:</p>
              <div className="span-btn"><p>01-09-21</p></div>
             </span>
              <span>
              <img src="/Images/calendar.png" alt="calender"/>  
              <p>From:</p>
              <div className="span-btn"><p>01-09-21</p></div>
              <p>To:</p>
              <div className="span-btn"><p>01-10-21</p></div>
              </span>
              <span>
              <img src="/Images/calendar.png" alt="calender"/>  
              <p>From:</p>
              <div className="span-btn"><p>12:00PM</p></div>
              <p>To:</p>
              <div className="span-btn"><p>04:00PM</p></div>
              </span>
              <span>
                <img src="/Images/rupee.png" alt="rupee"/>
                <div className="span-btn"><p>500</p></div>
              </span>
              <div className="app-btn">
                 <button>Apply</button>
                 <button className="chat-btn">Chat</button> 
              </div>
              </div>
             
              </div>
              <Footer/>

        </div>
    )
}

export  {InternshipDetails}