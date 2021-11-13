import {useState} from 'react'
import './stylesheet/inputphoneno.css'
import { SendOtpButton } from './SendOtpButton'

export const InputPhoneNo = ({changePage}) => {
    // const [takeInput,setTakeInput] = useState("")
    const [showNumber, setShowNumber] = useState(false)
    const [mobile,setMobile] = useState("")
    
    const handleShowCode = (e) => {
        setShowNumber(true);
    }

    const Input = (e)=>{
        setMobile(e.target.value)
    }

    const handleClick = async (req, res) => {

        const { data } = await axios.post('http://localhost:3001/users', {
            name: username,
            mobile: mobile
        })
        window.location = '/verify'
    }

    return (
        <>
            <div className="input_group">
                <input type="text" className="input_phonenumber" />
                <span className="phone_code" id="basic-addon1">{showNumber ? "+91" : ""}</span>
                <input onClick={handleShowCode} onChange={Input} type='Number'  placeholder="Enter registerd mobile number " className="input_phonenumber" value={mobile}  required/>
            </div>
            <SendOtpButton text="Send OTP" change={changePage} input={takeInput}/>
        </>
    )
}
