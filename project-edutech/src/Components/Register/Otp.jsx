import React from 'react'
import { useState } from 'react'
import axios from 'axios'


function Otp({ mobile, hash }) {

    const [otp, setOtp] = useState('')

    const handleChange = (e) => {
        setOtp(e.target.value)
    }

    const [error, setError] = useState({
        error: '',
        success: ''
    });

    const confirmOtp = () => {
        axios
            .post('http://localhost:3001/verify', {
                mobile: mobile,
                hash: hash,
                otp: parseInt(otp),
                withCredentials: true
            })
            .then(function (res) {
                console.log(res.data);
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error.response.data);
                setError({ ...error, error: error.response.data.msg });
            });
    };

    return (
        <div>

            <input type="tel" placeholder='Enter otp' onChange={handleChange} value={otp} />
            <button onClick={confirmOtp}>Verify</button>

        </div>
    )
}

export default Otp
