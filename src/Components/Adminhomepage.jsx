import Adminfooter from "./Adminfooter";
import Adminnavbar from "./Adminnavbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../Styles/Adminhome.css';
import Adminaddproducts from "./Adminaddproducts";
import Admindeshboard from "./Admindeshboard";
import Productlist from './Productlist';
import Updateproducts from "./Updateproducts";
import PrivacyPolicy from './PrivacyPolicy.jsx'
import ContactUs from './ContactUs.jsx'
import TermsOfService from './TermsOfService.jsx'
import Adminprofile from "./Adminprofile.jsx";
import Aboutus from "./Aboutus.jsx";
import 'sweetalert2/dist/sweetalert2.min.css';

const AdminHomepage = () => {
    return (
        <div className="admin-homepage">
            <Adminnavbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Admindeshboard />} />
                    <Route path="/Addproducts" element={<Adminaddproducts />} />
                    <Route path="/Productlist" element={<Productlist />} />
                    <Route path="/Updateproducts/:id" element={<Updateproducts />} />
                     <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/TermsOfService" element={<TermsOfService />} />
                    <Route path="/Adminprofile" element={<Adminprofile />} />
                    <Route path="/Aboutus" element={<Aboutus />} />
                    <Route path="/Admindeshboard" element={<Admindeshboard />} />
                </Routes>
            </div>
            <Adminfooter />
        </div>
    );
};

export default AdminHomepage;
