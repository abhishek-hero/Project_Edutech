import React from 'react'
import './stylesheet/sendotpButton.css'
import { EnterOtpPage } from './EnterOtpPage'
import {handleClick} from './FetchData'

export const SendOtpButton = ({change,input}) => {

    return (
        <>
            <button className="otp_btn" onClick={()=>handleClick(input,change)} >Send OTP</button>
        </>
    )
}
