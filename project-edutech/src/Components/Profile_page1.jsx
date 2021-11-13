import { Buttonbar_profile } from "./Buttonbar_profile";
import { Footer } from "./Home/Footer";
import "./Profile_page1.css";
import { Profile_pic } from "./Profile_pic";
import { Profile_subhead } from "./Profile_subhead";

export const Profile_page1 = () => {
  return (
    <>
      <div className="profile_box">
        <div className="profile_head">Profile</div>
      </div>
      <Profile_pic />
      <Profile_subhead />
      <Footer></Footer>
    </>
  );
};
