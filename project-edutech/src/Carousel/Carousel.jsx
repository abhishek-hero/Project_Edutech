import React from 'react'
import { Image } from './Image'
import './stylesheet/carousel.css'
// import {logo} from './stylesheet/logo192.png'


export const Carousel = () => {
    return (
        <>
        {/* <div class="slider">
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
    </div> */}
         {/* <div>
            <Image image="/Images/Learn.png" text="Learn" text1="Learn your Interests" text2="in the way you love to" /> 
            <Image image="/Images/Skateboard.png" text="Learn" text1="Learn your Interests" text2="in the way you love to" /> 
            <Image image="/Images/Career.png" text="Learn" text1="Learn your Interests" text2="in the way you love to" /> 
         </div>
         <input type='radio' name="" id="" />
         <input type="radio" name="" id="" />*/}

<div class="slider">
        <div class="images">
            <input type="radio" name="slide" id="img1" checked/>
            <input type="radio" name="slide" id="img2"/>
            <input type="radio" name="slide" id="img3"/>
            <input type="radio" name="slide" id="img4"/>

            <div className="m1" style={{}}>
            <img src="/Images/Learn.png" class="m1" alt="img1"/>
            <p>Learn</p>
            <p>Learn your Interests<br /> in the way you love to</p>
            </div>

            <div className="m2">
            <img src="/Images/Career.png" class="m2" alt="img2"/>
            <p>Learn</p>
            <p>Learn your Interests<br /> in the way you love to</p>
            </div>

            {/* <img src="/Images/Learn.png" class="m1" alt="img1"/>
            <img src="/Images/Career.png" class="m2" alt="img2"/>
            <img src="/Images/Skateboard.png" class="m3" alt="img3"/>
            
            <div className="text" style={{display:"flex"}}>
                <p id="img1">Hello</p>
                <p>Hi</p>
                <p>efkjn</p>
            </div> */}
        </div>
        <div class="dots">
            <button>Skip</button>
            <div>
            <label for="img1"></label>
            <label for="img2"></label>
            <label for="img3"></label>
            </div>
            <button>Next</button>
        </div>
    </div>
        </> 
    )
}
