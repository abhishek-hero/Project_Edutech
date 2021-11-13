import React from "react";
import { Arrow } from "../Login/Arrow";
import { DisplayNo } from "../Login/DisplayNo";
import { InputOtp } from "../Login/InputOtp";
import { ResendCode } from "../Login/ResendCode";
import { VerifyOtp } from "../Login/VerifyOtp";
import "./stylesheet/OtpPage.css";
import { useState } from "react";
import axios from "axios";
import "../Login/stylesheet/inputOtp.css";

export const OtpPage = () => {
  // console.log(props.value)
  // axios.defaults.withCredentials = true;

  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  // const [error, setError] = useState({
  //     error: '',
  //     success: ''
  // });
  // const { value } = props;

  // const back = (e) => {
  //     e.preventDefault();
  //     props.prevStep();
  // };

  // const confirmOtp = () => {
  //     axios
  //         .post('http://localhost:3001/verify', {
  //             mobile: `${value.mobile}`,
  //             hash: `${value.hash}`,
  //             otp: otp,
  //             withCredentials: true
  //         })
  //         .then(function (res) {
  //             console.log(res.data);
  //             window.location.reload();
  //         })
  //         .catch(function (error) {
  //             console.log(error.response.data);
  //             setError({ ...error, error: error.response.data.msg });
  //         });
  // };

  const generatedOtp = Math.floor(100000 + Math.random() * 900000);
  // alert(generatedOtp)

  const handleClick = async () => {
    window.location = "/HomeAfterPayment";
  };
  return (
    <>
      <Arrow heading="Register" />
      <div className="enterOtp">
        <DisplayNo />
        {/* <InputOtp /> */}
        <input
          type="tel"
          className="input_otp"
          placeholder="Enter 6 digit OTP"
          value={otp}
          onChange={handleChange}
        />
        <ResendCode />
        <button onClick={handleClick} className="otp_btn">
          Verify the code
        </button>
      </div>
    </>
  );
};
