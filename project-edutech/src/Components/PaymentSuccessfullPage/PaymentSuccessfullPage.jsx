import React from "react";
import "./PaymentSuccessfullPage.css";

const PaymentSuccessfullPage = () => {
  return (
    <div>
      <div className="PaymentSuccessBiggerGrid">
        <div className="PaymentSuccessInnerFlex">
          <img
            className="SuccessIcon"
            src="/Basic-icons/PaymentSuccessfullPageIcon.png"
            alt="Success Icon"
          />
          <div className="CongatulationsHeading">Congratulations!</div>
        </div>
        <div className="InnerDivText">
          You have successfully registered for the course.
        </div>
        <button className="Inner_ok_button">OK</button>
      </div>
    </div>
  );
};

export default PaymentSuccessfullPage;
