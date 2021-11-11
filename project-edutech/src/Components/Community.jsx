import React from 'react'

import {WelCome} from "./WelCome"

import { Carousel } from './Carousel'

import {Internship} from "./Internship"
import {Button} from "./Button"

import {Footer} from "./Footer"

function Community() {
    return (
        <div>

            <WelCome/>

            <Carousel title="Gigs" background='/Images/mentor-profile.png' border='3px solid #28B0DC' radius='50%' width='90px' height='90px' name='Sai Pallavi' profession='Content Writer' />

            <Internship title="Internship Programs" radius='7px' width='150px' height='180px' />

            <Button content='Notify Me'></Button>

            <Footer/>


        </div>
    )
}

export{
    Community
}
