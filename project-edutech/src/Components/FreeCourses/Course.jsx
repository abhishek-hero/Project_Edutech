import React from 'react'
import './style/course.css'

export const Course = ({image,text1,text2}) => {
    return (
        <div className="courses" >
            <img src={image} alt="img" />
            <p className="Course">{text1} <br /> {text2}</p>
        </div>
    )
}
