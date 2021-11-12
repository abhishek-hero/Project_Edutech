import React from 'react'
import './Internship.css'

export const Internship = ({ title, radius, width, height, svg1, svg2a, svg2, card_footer1, card_footer2 }) => {
    return (
        <>
            <div className="intsp_heading">
                <span className='intsp_title'>{title}</span>
                <span className='intsp_link'>See all</span>
            </div>

            <div className="intsp_home">

                <span>
                    <div style={{ borderRadius: radius, width: width, height: height }} className="intsp_div" alt=''>
                        <img className='intsp_svg' src={svg1} alt="" />
                    
                    </div>
                </span>
                <span>
                    <div style={{ borderRadius: radius, width: width, height: height }} className="intsp_div" alt=''>
                        <img className='intsp_svg' src={svg1} alt="" />
                        
                    </div>
                </span>
                <span>
                    <div style={{ borderRadius: radius, width: width, height: height }} className="intsp_div" alt=''>
                    <img className='intsp_svg' src={svg1} alt="" />
                    </div>
                    
                </span>
                <span>
                    <div style={{ borderRadius: radius, width: width, height: height }} className="intsp_div" alt=''></div>
                    <img className='intsp_svg' src="" alt="" />
                </span>
                <span>
                    <div style={{ borderRadius: radius, width: width, height: height }} className="intsp_div" alt=''></div>
                    <img className='intsp_svg' src="" alt="" />
                </span>
            </div>

        </>
    )
}