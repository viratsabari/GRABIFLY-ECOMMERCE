import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Usernavbar from './Usernavbar'
import Usernavigate from './Usernavigate.jsx'

import Userdashboard from './Userdashboard.jsx'
import Viewcart from './Viewcart.jsx'
import Myorders from './Myorders.jsx'
import Userfooter from './Userfooter.jsx'
import Userprofile from './Userprofile.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'
import ContactUs from './ContactUs.jsx'
import TermsOfService from './TermsOfService.jsx'
import Logout from './Logout.jsx'
import Aboutus from './Aboutus.jsx'

const Userhomepage = () => {
  return (
    <div className="userhomepage">
            <Usernavbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Userdashboard />} />
                    <Route path="/Viewcart" element={<Viewcart/>} />
                    <Route path="/Myorders" element={<Myorders />} />
                    <Route path="/Userprofile" element={<Userprofile />} />
                    <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/TermsOfService" element={<TermsOfService />} />
                    <Route path="/Logout" element={<Logout/>} />
                    <Route path="/Aboutus" element={<Aboutus />} />
                </Routes>
            </div>
            <Userfooter/>
        </div>
  )
}

export default Userhomepage
