import React, { useState } from 'react'
import { EnterPhoneNoPage } from './EnterPhoneNoPage'
import { EnterOtpPage } from './EnterOtpPage';

export const LoginPage = () => {
    const [passMobileNo,setPassMobileNo] = useState('')
    const [showPage, setShowPage] = useState(true);

    const handleChangePage = (data) => {
        setPassMobileNo(data)
        setShowPage(!showPage)
    }

    return (
        <>
            {
                showPage ? <EnterPhoneNoPage changePage={handleChangePage} /> : <EnterOtpPage changePage={handleChangePage} enteredNo = {passMobileNo} />
            }
        </>
    )
}
