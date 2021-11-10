import React, { useRef, useState } from 'react'
import './stylesheet/enterOtpPage.css'
import './stylesheet/inputOtp.css'
import { InputOtp } from './InputOtp';
import { Arrow } from './Arrow';
import { VerifyOtp } from './VerifyOtp';
import { DisplayNo } from './DisplayNo';
import { ResendCode } from './ResendCode';

export const EnterOtpPage = ({changePage,enteredNo}) => {
    const [otp,setOtp] = useState('');
    const [startTimer,setStartTimer] = useState(false)
    const [resendtimer,setResendTimer] = useState(0)
    const timer = useRef(0)
    
    const handleResendCode = ()=>{
        setStartTimer(true)
        setResendTimer(0)
        timer.current = setInterval(()=>{
            setResendTimer((prev)=>{
                console.log(prev)
                if(prev === 5){
                    clearInterval(timer.current);
                    setStartTimer(false)
                    return;
                }
                return (prev+1)
            })
        },1000)
    }

    const handleInputOtp = (e)=>{
        setOtp(e.target.value)
    }

    return (
        <>
        <Arrow  heading="Login" changePage={changePage}/>
        <div className="enterOtpPage">
            <DisplayNo enteredNo={enteredNo}/>
            <InputOtp handleInputOtp={handleInputOtp}/>
            <ResendCode resendtimer={resendtimer} startTimer={startTimer} handleResendCode={handleResendCode} />
            <VerifyOtp enteredNo = {enteredNo} inputOtp={otp} />
        </div>
        </>
    )
}
