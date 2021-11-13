import { useState } from 'react'
import './stylesheet/Input.css'
import axios from 'axios'


export const Input = () => {

    const [mobile, setMobile] = useState('')
    // const [username, setUsername] = useState('')


    const handleChange = (e) => {
        setMobile(e.target.value)
    }


    const handleClick = async (req, res) => {

        const { data } = await axios.post('http://localhost:3001/users', {
            // name: username,
            mobile: mobile
        })

        window.location = '/verify'
    }


    return (
        <>
            <div className="input_group">
                <span className="phone_code" id="basic-addon1">+91</span>
                <input onChange={handleChange} type='Number' placeholder="Enter mobile number" value={mobile} className="input_phonenumber" required />
            </div>

            <button onClick={handleClick} className="otp_btn">Send OTP</button>

        </>
    )
}