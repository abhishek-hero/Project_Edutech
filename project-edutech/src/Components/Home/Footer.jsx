import React from 'react'
import './Styles/Footer.css'

export const Footer = () => {
    return (
        <div className='footer'>

            <div className="footer_icons1 footer_icons">
                <img src="/Icons/explore.svg" alt="" />
                <p>Explore</p>
            </div>
            <div className="footer_icons2 footer_icons">
                <img src="/Icons/myProjects.svg" alt="" />
                <p>My Courses</p>
            </div>
            <div className="footer_icons3 footer_icons">
                <img src="/Icons/explore.svg" alt="" />
                <p>My Projects</p>
            </div>
            <div className="footer_icons4 footer_icons">
                <img src="/Icons/myProjects.svg" alt="" />
                <p>Community</p>
            </div>
            <div className="footer_icons5 footer_icons">
                <img src="/Icons/explore.svg" alt="" />
                <p>Profile</p>
            </div>

        </div>
    )
}

export default Footer
