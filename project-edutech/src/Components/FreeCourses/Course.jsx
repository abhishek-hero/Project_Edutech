import React from 'react'
import { Link } from 'react-router-dom'
import './style/course.css'

export const Course = ({image,text1,text2}) => {
    return (
        
        <Link to="/course-lessons">
        <div className="courses">
            <img src={image} alt="img" />
            <p className="Course">{text1} <br /> {text2}</p>
        </div>
        </Link>
    )
}
