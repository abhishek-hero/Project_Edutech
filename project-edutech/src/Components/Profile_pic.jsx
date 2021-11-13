import "./Profile_pic.css";

export const Profile_pic=()=>{
    return(
        <>
        <div className="profile_lay">
            <div className="pic_layout">
                <div className="pic"><img src="/Images/Pic.png"></img></div>
                <div className="contact_lay">
                    <div className="name">Muskan</div>
                    <div className="contact">+919000000000</div>
                    <div className="email">muskan9@gmail.com</div>
                </div>
            </div>
            <div className="edit_layout"><img src="/Icons/edit-mode.svg"/></div>
        </div>
        </>
    );
}