import React from 'react'
import "./RecomendedCourses.css"
import {Footer} from "./Footer"

function RecomendedCourses() {
    return (
        <div>
            <div className="ethical img-cont">
                <img src="/Images/ethicalhaking.png" alt=""/>
                <p>Ethical Hacking</p>
            </div>
            <div className="classical img-cont">
            <img src="/Images/classicalmusic.png" alt=""/>
                <p>Classical Music</p>
            </div>
            <div className="content img-cont">
            <img src="/Images/contentwrite.png" alt=""/>
                <p>Content Writing</p>
            </div>
            <div className="chess img-cont">
            <img src="Images/chess.png" alt=""/>
                <p>Chess</p>
            </div>
            <div className="standup img-cont">
            <img src="Images/standup.png" alt=""/>
                <p>Stand up Comedy</p>
            </div>
            <div className="fullstack img-cont">
            <img src="Images/fullstackdevelopment.png" alt=""/>
                <p>Full Stack Development</p>
            </div>
            <Footer/>
        </div>
    )
}

export  {RecomendedCourses}
