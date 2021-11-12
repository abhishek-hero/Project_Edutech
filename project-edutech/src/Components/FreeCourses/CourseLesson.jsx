import React from 'react'
import { Video } from './Video'
import { Lesson } from './Lesson'

import './style/courseLesson.css'

export const CourseLesson = () => {
    return (
        <div className="course-lesson-container">
            <button className="back-arrow"><img src="/Images/Back Icon.png" alt="" /></button>
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