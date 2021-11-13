import React from 'react'
import { Link } from 'react-router-dom'
import './Gigs.css'


export const Gigs = ({ title, height, background, radius, width, border, name, profession }) => {
    return (

        <>

            <div className="gigs_heading">
                <span className='gigs_title'>{title}</span>
                <Link to='/gigs'><span className='gigs_link'>See all</span></Link>
            </div>
            <Link to="/gigs-details">
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
            </Link>

        </>
    )
}