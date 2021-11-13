import React from 'react'
import { Course } from './Course'
import './style/freecourse.css'
import { Link } from 'react-router-dom'

export const FreeCourses = () => {
    return (
        <>
        <div className="course-heading"> <Link ><button> <img src="/Icons/Back Icon.svg" alt="" /> </button></Link>  Try a free course</div>
        <div className="course-container">
        <div className="column1">
                <Course image="/Images/Speaking.png" text1="Public" text2="Speaking"/>
                <Course image="/Images/Programming.png" text1="Intro to" text2="Programming"/>
                <Course image="/Images/Stock.png" text1="Photo" text2="Editing"/>
                <Course image="/Images/Programming.png" text1="Intro to" text2="Programming"/>
        </div>
            <div className="column2">
                <Course image="/Images/Editing.png" text1="Photo" text2="Editing"/>
                <Course image="/Images/Stress.png" text1="Stress" text2="Reduction" />
                <Course image="/Images/Speaking.png" text1="Public" text2="Speaking"/>
                <Course image="/Images/Stress.png" text1="Stress" text2="Reduction" />
            </div>
        </div>
        </>
    )
}
