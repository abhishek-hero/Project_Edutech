import React from 'react'
import './stylesheet/carousel.css'
// import {logo} from './stylesheet/logo192.png'


export const Carousel = () => {
    return (
        <>
        <div class="slider">
        <div class="images">
            <input type="radio" name="slide" id="img1" checked/>
            <input type="radio" name="slide" id="img2"/>
            <input type="radio" name="slide" id="img3"/>
            <input type="radio" name="slide" id="img4"/>

            <img src="https://via.placeholder.com/400" class="m1" alt="img1"/>
            <img src="https://via.placeholder.com/300" class="m2" alt="img2"/>
            <img src="https://via.placeholder.com/700" class="m3" alt="img3"/>
            <img src="https://via.placeholder.com/500" class="m4" alt="img4"/>
        </div>
        <div class="dots">
            <label for="img1"></label>
            <label for="img2"></label>
            <label for="img3"></label>
            <label for="img4"></label>
        </div>
    </div>
        </>
    )
}
