import "./Payment_page1.css";
import { Link } from "react-router-dom";
export const Payment_page1 = () => {
  return (
    <>
      <div className="payment_arrow">
        <img src="/Icons/Back_icon.svg"></img>
      </div>
      <div className="progress">
        <img src="/Icons/bar.svg"></img>
      </div>
      <div className="city">
        <input
          className="city_name removingBorder"
          placeholder="Enter your city"
        ></input>
      </div>
      <div className="month">
        <input
          className="month_name removingBorder"
          placeholder="Select the month to start"
        ></input>
        <div className="down_arrow">
          <img src="/Icons/Down_arrow.svg"></img>
        </div>
      </div>
      <div className="promo">
        <input
          className="pro_code removingBorder"
          placeholder="Promocode(If any)"
        />
      </div>
      <div className="proceed">
        <Link to="/Payment_page2">
          <div className="proceed_name">Proceed</div>
        </Link>
      </div>
    </>
  );
};
