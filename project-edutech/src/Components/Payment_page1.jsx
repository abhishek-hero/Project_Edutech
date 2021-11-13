
import "./Payment_page1.css";

export const Payment_page1=()=>{
    return(
        <>
        <div className="payment_arrow">
            <img src="/Icons/Back_icon.svg"></img>
        </div>
        <div className="progress">
           <img src="/Icons/bar.svg"></img>
        </div>
        <div className="city">
            <input className="city_name"placeholder="Enter your city"></input>
        </div>
        <div className="month">
            <input className="month_name" placeholder="Select the month to start"></input>
            <div className="down_arrow"><img src="/Icons/Down_arrow.svg"></img></div>
        </div>
        <div className="promo">
            <input className="pro_code" placeholder="Promocode(If any)"/>
        </div>
        <div className="proceed">
            <div className= "proceed_name">Proceed</div>
        </div>
        </>
    );
}