import React from 'react'
import './stylesheet/displayNo.css'
export const DisplayNo = ({enteredNo}) => {
    return (
        <>
            <p className="display_no">Please enter the verification code sent to your registered mobile number <span>+91{enteredNo}</span></p>
        </>
    )
}
