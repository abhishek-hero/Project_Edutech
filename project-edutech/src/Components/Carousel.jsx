import React from 'react'
import './Carousel.css'
import { Link } from 'react-router-dom'

export const Carousel = ({ title, height, background, radius, width, border, name, profession }) => {
    return (

        <>

            <div className="carousel_heading">
                <span className='carousel_title'>{title}</span>
                <Link to='/mentors'><span className='carousel_link'>See all</span></Link>
            </div>

            <div className="carousel_home1">

                <span>
                    <img src={background} style={{ borderRadius: radius, width: width, border: border }} className="carousel_img" alt=''>
                    </img>
                    <div className="mentor_name">{name}</div>

                    <div className="mentor_profession">{profession}</div>
                </span>
                <span>
                    <img src={background} style={{ borderRadius: radius, width: width, border: border }} className="carousel_img" alt=''></img>
                    <div className="mentor_name">{name}</div>

                    <div className="mentor_profession">{profession}</div>
                </span>
                <span>
                    <img src={background} style={{ borderRadius: radius, width: width, border: border }} className="carousel_img" alt=''></img>
                    <div className="mentor_name">{name}</div>

                    <div className="mentor_profession">{profession}</div>
                </span>
                <span>
                    <img src={background} style={{ borderRadius: radius, width: width, border: border }} className="carousel_img" alt=''></img>
                    <div className="mentor_name">{name}</div>

                    <div className="mentor_profession">{profession}</div>
                </span>
                <span>
                    <img src={background} style={{ borderRadius: radius, width: width, border: border }} className="carousel_img" alt=''></img>
                    <div className="mentor_name">{name}</div>

                    <div className="mentor_profession">{profession}</div>
                </span>
            </div>

        </>
    )
}
