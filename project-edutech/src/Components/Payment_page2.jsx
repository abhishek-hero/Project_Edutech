
import "./Payment_page1.css";

export const Payment_page2=()=>{
    return(
        <>
        <div className="payment_arrow">
            <img src="/Icons/Back_icon.svg"></img>
        </div>
        <div className="progress"><img src="/Icons/bar2.svg"></img></div>
       <div className="box">
           <div className="name1">Name</div>
           <div className="title_name"><div className="tit_name">Muskan</div></div>
       </div>
       <div className="box">
           <div className="name1">Course Name</div>
           <div className="title_name"><div className="tit_name">Photography</div></div>
       </div>
       <div className="box">
           <div className="name1">Course Month</div>
           <div className="title_name"><div className="tit_name">December</div></div>
       </div>
       <div className="box">
           <div className="name1">City</div>
           <div className="title_name"><div className="tit_name">Bengaluru</div></div>
       </div>
       <div className="box">
           <div className="name1">Promocode</div>
           <div className="title_name"><div className="tit_name">LEARNIT</div></div>
       </div>
        <div className="proceed">
            <div className= "proceed_name">Confirm</div>
        </div>
        </>
    );
}