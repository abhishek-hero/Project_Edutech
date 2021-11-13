import React from 'react'
import './Styles/MentorPage.css'
import { Mentor } from './Mentor'
import { Footer } from '../Home/Footer'

export const MentorPage = () => {
    return (
        <div>
            <div className="main_div_mentor">
                <img src="/Icons/BackIcon.svg" alt="" />
                <p>Who are your mentors?</p>
            </div>
            <div className="mentorPage_main_div">
                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>

                <div className="space_div_mentor"></div>

            </div>
            <Footer></Footer>
        </div>
    );
};
