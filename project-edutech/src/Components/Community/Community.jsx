import React from 'react'

import {WelCome} from "./WelCome"

 import {Gigs } from './Gigs'

 import {Internship} from "./Internship"
 import {Button} from "../Home/Button"

 import {Footer} from "../Home/Footer"

function Community() {
    return (
        <div>

            <WelCome/>

            <Gigs title="Gigs" background='/Images/gigsphoto.png' border='3px solid #28B0DC' radius='50%' width='90px' height='90px' name='Photography'/>

            <Internship title="Internship Programs" radius='7px' width='150px' height='180px' svg1="Images/internshipphoto.png" />

            <Button content='Notify Me'></Button>

            <Footer/>


        </div>
    )
}

export{
    Community
}
