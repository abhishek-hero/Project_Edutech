import "./Profile_subhead.css";

export const Profile_subhead=()=>{
    return(
        <>
        <hr className="Profile_line"></hr>
        <div className="subhead">
            <div className="subhead_title">My Subscriptions</div>
        </div>
        <div className="subhead">
            <div className="subhead_title">My Payments</div>
        </div>
        <div className="subhead">
            <div className="subhead_title">Help Desk</div>
        </div>
        <div className="subhead">
            <div className="subhead_title   ">Logout</div>
        </div>
        </>
    );
}