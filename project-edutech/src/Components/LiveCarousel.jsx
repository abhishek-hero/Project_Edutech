import React from 'react'
import './LiveCarousel.css'

export const LiveCarousel = ({ title, background, background1, background2, background3 }) => {
    return (

        <>
            <div className="carousel_heading">
                <span className='carousel_title'>{title}</span>
                <span className='carousel_link'>See all</span>
            </div>

            <div className="carousel_home">

                <span>

                    <div className="Livecarousel_div" style={{ backgroundImage: `url(${background1})` }}>
                        <div className='overlay'>
                        </div>
                    </div>

                </span>
                <span>

                    <div className="Livecarousel_div" style={{ backgroundImage: `url(${background2})` }}>
                        <div className='overlay'></div>
                    </div>
                </span>
                <span>

                    <div className="Livecarousel_div" style={{ backgroundImage: `url(${background3})` }}>
                        <div className='overlay'></div>
                    </div>

                </span>
                <span>

                    <div className="Livecarousel_div" style={{ backgroundImage: `url(${background1})` }}>
                        <div className='overlay'></div>
                    </div>

                </span>
                <span>

                    <div className="Livecarousel_div" style={{ backgroundImage: `url(${background1})` }}>
                        <div className='overlay'></div>
                    </div>

                </span>
            </div>

        </>
    )
}
