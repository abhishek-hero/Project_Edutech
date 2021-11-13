

import "./Payment_page1.css";

export const Payment_page3=()=>{
    return(
        <>
        <div className="payment_arrow">
            <img src="/Icons/Back_icon.svg"></img>
        </div>
        <div className="progress"><img src="/Icons/bar3.svg"></img></div>
        <div className="progress_1">
            <div className="square">learnit</div>
            <div className="names">
                <div className="photog">Photography</div>
                <div className="amou">RS.2999/-</div>
            </div>
        </div>
        <div className="phone_pay">
            <div className="icon_logo"><img src="/Icons/phonepe.svg"></img></div>
            <div className="icon_name">Phonepe</div>
            <div className="icon_progress"><img src="/Icons/Circle.svg"></img></div>
        </div>
        <div className="phone_pay">
            <div className="icon_logo"><img src="/Icons/gpay.svg"></img></div>
            <div className="icon_name">Gpay</div>
            <div className="icon_progress"><img src="/Icons/Circle.svg"></img></div>
        </div>
        <div className="phone_pay">
            <div className="icon_logo"><img src="/Icons/online.svg"></img></div>
            <div className="icon_name_1">
                <div className="on">Online</div>
                <div className="off">Debit Card, Credit Card, Net Banking, UPI</div>
            </div>
            <div className="icon_circle"><img src="/Icons/Circle.svg"></img></div>
        </div>
        <div className="phone_pay">
            <div className="icon_logo_1"><img src="/Icons/paytm.svg"></img></div>
            <div className="icon_name_1">
                <div className="on">Online</div>
                <div className="off">Debit Card, Credit Card, Net Banking, UPI</div>
            </div>
            <div className="icon_circle"><img src="/Icons/Circle.svg"></img></div>
        </div>
       
        <div className="proceed">
            <div className= "proceed_name">Pay RS.2999/-</div>
        </div>
        </>
    );
}