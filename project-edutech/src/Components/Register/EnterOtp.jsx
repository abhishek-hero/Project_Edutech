import React from 'react'
import { Arrow } from '../Login/Arrow'
import { DisplayNo } from '../Login/DisplayNo'
import { InputOtp } from '../Login/InputOtp'
import { ResendCode } from '../Login/ResendCode'
import { VerifyOtp } from '../Login/VerifyOtp'
import './stylesheet/enterotp.css'

export const EnterOtp = () => {
    return (
        <>
            <Arrow heading="Register" />
        <div className="enterOtp">    
            <DisplayNo/>
            <InputOtp/>
            <ResendCode/>
            <VerifyOtp/>
        </div>
        </>
    )
}
