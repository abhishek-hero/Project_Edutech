import React from 'react'
import { handleStore } from './StoreData'

export const SendOtpBtn = ({input,change}) => {

    // const handleClick = (input)=>{
    //     if(input.length === 10){
    //         const res = 
    //     }else{
    //         alert('Enter valid mobile number')
    //     }
    // }
    return (
        <>
            <button className="otp_btn" onClick={() => handleStore(input)}>Send OTP</button>
        </>
    )
}
