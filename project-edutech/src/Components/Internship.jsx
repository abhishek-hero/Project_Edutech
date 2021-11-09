import React from 'react'
import './Internship.css'

export const Internship = ({ title, radius, width, height }) => {
    return (
        <>
            <div className="internship_heading">
                <span className='internship_title'>{title}</span>
                <span className='internship_link'>See all</span>
            </div>

            <div className="internship_home">

                <span>
                    <div style={{ borderRadius: radius, width: width, height: height }} className="internship_div" alt=''>
                        <img className='main_svg' src="" alt="" />
                    </div>
                </span>
                <span>
                    <div style={{ borderRadius: radius, width: width, height: height }} className="internship_div" alt=''>
                        <img className='main_svg' src="" alt="" />
                    </div>
                </span>
                <span>
                    <div style={{ borderRadius: radius, width: width, height: height }} className="internship_div" alt=''></div>
                    <img className='main_svg' src="" alt="" />
                </span>
                <span>
                    <div style={{ borderRadius: radius, width: width, height: height }} className="internship_div" alt=''></div>
                    <img className='main_svg' src="" alt="" />
                </span>
                <span>
                    <div style={{ borderRadius: radius, width: width, height: height }} className="internship_div" alt=''></div>
                    <img className='main_svg' src="" alt="" />
                </span>
            </div>

        </>
    )
}
