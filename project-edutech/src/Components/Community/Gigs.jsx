import React from 'react'
import './Gigs.css'
import { Link } from 'react-router-dom'

export const Gigs = ({ title, height, background, radius, width, border, name, profession }) => {
    return (

        <>

            <div className="gigs_heading">
                <span className='gigs_title'>{title}</span>
                <Link to='/gigs'><span className='gigs_link'>See all</span></Link>
            </div>

            <div className="gigs_home1">

                <span>
                    <img src={background} style={{ borderRadius: radius, width: width, border: border }} className="gigs_img" alt=''>
                    </img>
                    <div className="gig_name">{name}</div>

                </span>
                <span>
                    <img src={background} style={{ borderRadius: radius, width: width, border: border }} className="gigs_img" alt=''></img>
                    <div className="gig_name">{name}</div>

                    
                </span>
                <span>
                    <img src={background} style={{ borderRadius: radius, width: width, border: border }} className="gigs_img" alt=''></img>
                    <div className="gig_name">{name}</div>

                    
                </span>
                <span>
                    <img src={background} style={{ borderRadius: radius, width: width, border: border }} className="gigs_img" alt=''></img>
                    <div className="gig_name">{name}</div>

                   
                </span>
                <span>
                    <img src={background} style={{ borderRadius: radius, width: width, border: border }} className="gigs_img" alt=''></img>
                    <div className="gig_name">{name}</div>

                   
                </span>
            </div>

        </>
    )
}