import React, { useEffect, useRef } from 'react'
import './stylesheet/carousel1.css'

export const CarouselFinal = () => {
    const item = useRef(null);

    useEffect(()=>{
        console.log(item.current.id)
    },[])

    // useEffect(()=>{
    //     setInterval(()=>{
    //         
    //     },10000)
    // })
    // const autoSlider = ()=>{

    // }
    return (
            <section className="section">
                <div className="slider">
                    <div className="slide" >
                        <input type="radio" name="radio-btn" id="radio1" ref={item} />
                        <input type="radio" name="radio-btn" id="radio2" />
                        <input type="radio" name="radio-btn" id="radio3" />

                        <div className="st first">
                            <div>
                            <img src="/Images/Learn.png" alt="" />
                            <p style={{color:"red",backgroundColor:"balck"}} >hello</p>
                            </div>
                            
                        </div>
                        <div className="st">
                            <img src="/Images/Career.png" alt="" />
                        </div>
                        <div className="st">
                            <img src="/Images/Skateboard.png" alt="" />
                        </div>

                        <div className="nav-auto">
                            <div className="a-b1"></div>
                            <div className="a-b2"></div>
                            <div className="a-b3"></div>
                        </div>

                    </div>
                    <div className="nav-m">
                        <label htmlFor="radio1" className="m-btn"></label>
                        <label htmlFor="radio2" className="m-btn"></label>
                        <label htmlFor="radio3" className="m-btn"></label>
                    </div>
                </div>
            </section>
    )
}
