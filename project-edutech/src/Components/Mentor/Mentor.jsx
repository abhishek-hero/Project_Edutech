import React from 'react'
import './Styles/Mentor.css'
import axios from 'axios'

export const Mentor = () => {

    return (
        <div className='mentor_main_div'>

            <img src="/Images/mentor-profile.png" alt="mentor" />
            <div className="mentor_name">Sai Pallavi</div>
            <div className="mentor_profession">Content Writer</div>

        </div>
    )
}