import React from 'react'

export const ResendCode = ({ handleResendCode, startTimer, resendtimer }) => {
    return (
        <>
            <button onClick={handleResendCode}>{startTimer ? `Resend in 0:0${resendtimer}` : "Resend Code"}</button>
        </>
    )
}
