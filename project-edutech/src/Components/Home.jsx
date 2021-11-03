import React from 'react'
import './Home.css'
import { Banner } from './Banner'
import { Carousel } from './Carousel'
import { CarouselCard } from './CarouselCard'
import { Button } from './Button'
import { LiveCarousel } from './LiveCarousel'

export const Home = () => {
    return (
        <div>

            <Banner />

            <LiveCarousel title="Take the free live demo" background1='/Images/camera_carousel.png' background2='/Images/camera_carousel.png' background3='/Images/camera_carousel.png'></LiveCarousel>

            <Carousel title="Who are your mentors" background='/Images/mentor-profile.png' border='3px solid #28B0DC' radius='50%' width='90px' height='90px' name='Sai Pallavi' profession='Content Writer' />

            <CarouselCard svg1='/Icons/Vector.svg' svg2='/Icons/mic.svg' title="Recommended Courses" radius='7px' width='160px' height='150px' />

            <div className='home_carousel_title'>
                <strong>Discover your love</strong>
                <br />
                <small>Start learning with live sessions</small>
            </div>


            <CarouselCard card_footer1='Content Writing' card_footer2='Graphic Design' svg1='/Icons/contentWriting.svg' svg2='/Icons/graphicDesign1.svg' svg2a='/Icons/graphicDesign2.svg' title="Creative Courses" radius='7px' width='150px' height='180px' />

            <CarouselCard card_footer1='Web Development' card_footer2='Android Development' svg1='/Icons/webDevelopment.svg' svg2='/Icons/android.svg' title="Technical Courses" radius='7px' width='150px' height='180px' />

            <LiveCarousel title="Try a free course" background1='/Images/freeCourse1.png' background2='/Images/freeCourse2.png' background3='/Images/freeCourse2.png'></LiveCarousel>

            <Button content='Join a course'></Button>

        </div>
    )
}
