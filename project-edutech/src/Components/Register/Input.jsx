import { useState } from 'react'
import './stylesheet/Input.css'
import axios from 'axios'


export const Input = ({ hashHandleChange }) => {

    // const { value, hashHandleChange } = props;

    const [mobile, setMobile] = useState('')

    const handleChange = (e) => {
        setMobile(e.target.value)
    }


    const handleClick = async (req, res) => {

        axios
            .post('http://localhost:3001/register', {
                mobile: mobile
            })
            .then(function (res) {
                console.log(res.data.otp);
                const hash = res.data.hash;
                // hashHandleChange(hash);
            });
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