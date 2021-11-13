import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import Otp from './Otp';

function SignUp() {

    const [hash, setHash] = useState('')
    const [mobile, setMobile] = useState('')
    // const [otp, setOtp] = useState('')
    const [check, setCheck] = useState(false)

    const handlechange = (e) => {
        setMobile(e.target.value)
    }

    const Continue = () => {

        axios
            .post('http://localhost:3001/register', {
                mobile: mobile
            })
            .then(function (res) {

                const hash = res.data.hash;

                setHash(hash)
            });

        // window.location = '/verify'
    };

    return (

        <div>

            <input type="tel" placeholder='Enter mobile no' onChange={handlechange} value={mobile} />
            <button onClick={Continue}>Send Otp</button>

            {check ? <Otp mobile={mobile} hash={hash}></Otp> : null}

        </div>
    )

}

export default SignUp