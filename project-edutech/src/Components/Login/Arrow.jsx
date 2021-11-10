import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import './stylesheet/arrow.css'

export const Arrow = ({ changePage, heading }) => {
    return (
        <>
            <p className="back_arrow" onClick={changePage}>
            <button><BsArrowLeftShort className="arrow" size={45} /></button>
            {heading}</p>
        </>
    )
}