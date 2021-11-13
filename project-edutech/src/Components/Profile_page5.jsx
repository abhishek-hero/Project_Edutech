import { Buttonbar_profile } from "./Buttonbar_profile";
import Footer from "./Footer";
import { Profile_cart } from "./Profile_cart";
import { Profile_head } from "./Profile_head";


export const Profile_page5=()=>{
    return(
        <>
        <Profile_head/>
        <Buttonbar_profile/>
        <Profile_cart/>
        <Footer/>
        </>
    );
}