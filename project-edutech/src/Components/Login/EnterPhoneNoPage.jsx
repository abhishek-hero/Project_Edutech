import React from 'react'
import { Heading } from './Heading';
import {InputPhoneNo} from './InputPhoneNo'
import { HorizontalRule } from './HorizontalRule';
import { NewUser } from './NewUser';
import { ContactUs } from './ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheet/enterPhoneNoPage.css'

export const EnterPhoneNoPage = ({changePage}) => {
    
    return (
        <div className="enterPhoneNo">
            <Heading heading="Login"/>
            <InputPhoneNo changePage = {changePage}/>
            <HorizontalRule/>
            <NewUser newUser="New User? Register now"/>
            <ContactUs/>
        </div>
    )
}
