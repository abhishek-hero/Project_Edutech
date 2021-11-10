import {useState} from 'react'
import './stylesheet/verifyotp.css'

export const VerifyOtp = ({enteredNo,inputOtp}) => {
    const [checkOtp,setCheckOtp] = useState('')
    
    const handleLogin = async()=>{
        const res = await fetch(`http://localhost:3001/findmobileno?mobile=${enteredNo}`);
        const {user} = await res.json();
        
        const {otp} = user;
        
        if(otp == inputOtp)
        alert("login to home");

        else
        alert("Entered Wrong OTP");
    }

    return (
        <div>
            <button className="otp_btn" onClick={handleLogin}>Verify the code</button>
        </div>
    )
}
