import React from 'react'
import "./CoursePage.css"
import {Button} from "../Button"
import { Overview } from './Overview'
import {BookDemo} from "./BookDemo"
import { Home } from '../Home'

function CoursePage() {
    return (
        <div>
            <div className="top-section">
                <div className="buy-now-btn">
                <Button content="Buy Now"/>
                </div>
            </div>
            <div className="demo-video">

            </div>
            <div className="overview-book">
               <a href="">Over View</a>
               <a href="">Book a Demo</a> 
            </div>
            <div className="book-demo">
                <BookDemo/>
            </div>
        </div>
    )
}

export  {CoursePage}
