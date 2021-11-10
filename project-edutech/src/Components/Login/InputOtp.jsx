import React from 'react'
import './stylesheet/inputOtp.css'
import { VerifyOtp } from './VerifyOtp'

export const InputOtp = ({handleInputOtp}) => {

    return (
        <input type="text" className="input_otp" placeholder="Enter Code" onChange={(e)=>handleInputOtp(e)}/>
    )
}
