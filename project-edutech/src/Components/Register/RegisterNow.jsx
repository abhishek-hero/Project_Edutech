import React from 'react'
import { ContactUs } from '../Login/ContactUs'
import { Heading } from '../Login/Heading'
import { HorizontalRule } from '../Login/HorizontalRule'
import { Input } from './Input'
import { NewUser } from '../Login/NewUser'
import './stylesheet/RegisterNow.css'


export const RegisterNow = () => {
    return (
        <div className="register_User">
            <Heading heading="Register" />
            <Input />
            <HorizontalRule />
            <NewUser newUser="Already a user? Login" />
            <ContactUs />
        </div>
    )
}