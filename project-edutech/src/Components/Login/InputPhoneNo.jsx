import {useState} from 'react'
import './stylesheet/inputphoneno.css'
import { SendOtpButton } from './SendOtpButton'

export const InputPhoneNo = ({changePage}) => {
    const [takeInput,setTakeInput] = useState("")
    const [showNumber, setShowNumber] = useState(false)

    const handleShowCode = (e) => {
        setShowNumber(true);
    }

    const Input = (e)=>{
        setTakeInput(e.target.value)
    }

    return (
        <>
            <div className="input_group">
                <span className="phone_code" id="basic-addon1">{showNumber ? "+91" : ""}</span>
                <input onClick={handleShowCode} onChange={Input} type='Number'  placeholder="Enter registerd mobile number " className="input_phonenumber"   required/>
            </div>
            <SendOtpButton text="Send OTP" change={changePage} input={takeInput}/>
        </>
    )
}
