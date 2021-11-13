import React from 'react'
import { Video } from './Video'
import { Lesson } from './Lesson'
import { Link } from 'react-router-dom'

import './style/courseLesson.css'

export const CourseLesson = () => {
    return (
        <div className="course-lesson-container">
            <Link to="/free-course">
            <button className="back-arrow"><img src="/Images/Back Icon.png" alt="" /></button>
            </Link> 
            <Video/>
            <div>Course Lessons</div>
            <Lesson/>
            <Lesson/>
            <Lesson/>
            <Lesson/>
            <Lesson/>
        </div>
    )
}