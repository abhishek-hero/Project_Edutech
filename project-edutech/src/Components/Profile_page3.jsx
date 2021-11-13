import { Buttonbar_profile } from "./Buttonbar_profile";
import Footer from "./Footer";
import { Profile_head } from "./Profile_head";
import "./Profile_page3.css";


export const Profile_page3 = () => {
    return(
        <>
          <Profile_head/>
          <Buttonbar_profile/>
          <div className="in">No Ongoing Courses</div>
          <Footer/>
        </>
    );
}