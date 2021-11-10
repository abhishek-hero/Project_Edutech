import React from 'react'
import { ContactUs } from '../Login/ContactUs'
import { Heading } from '../Login/Heading'
import { HorizontalRule } from '../Login/HorizontalRule'
import { InputPhoneNo } from './InputPhoneNo'
import { NewUser } from '../Login/NewUser'
import './stylesheet/registerPhoneNo.css'

export const RegisterPhoneNo = () => {
    return (
        <div className="register_User">
            <Heading heading="Register"/>
            <InputPhoneNo/>
            <HorizontalRule/>
            <NewUser newUser="Already a user?Login"/>
            <ContactUs/>
        </div>
    )
}
