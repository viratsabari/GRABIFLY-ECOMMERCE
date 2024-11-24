import axios from 'axios';
import { useState } from 'react';
import '../Styles/Adminsignup.css';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Adminsignup = () => {
    let [username, setusername] = useState("");
    let [password, setpassword] = useState("");
    let [retypepassword, setretypepassword] = useState("");
    let navigate = useNavigate();

    let data = { username, password, retypepassword };

    function adddata(e) {
        e.preventDefault(); 
        axios.post('http://localhost:3012/Admin', data)
            .then(() => {
                toast.success("Signup successfully");
                navigate('/AdminLogin');
            })
            .catch(() => {
                toast.warning("Enter the details properly");
            });
    }

    return (
        <div className="Adminsignup">
            <h1>ENTER THE SIGNUP DETAILS</h1>
            <form onSubmit={adddata}>
                <label htmlFor="username">USERNAME</label>
                <input type="text" value={username} onChange={(e) => { setusername(e.target.value) }} required />
                <label htmlFor="password">PASSWORD</label>
                <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} required />
                <label htmlFor="retypepassword">RETYPE PASSWORD</label>
                <input type="password" value={retypepassword} onChange={(e) => { setretypepassword(e.target.value) }} required />
                <button type="submit"><span>SIGN UP</span></button>
            </form>
            <ToastContainer /> 
        </div>
    );
};

export default Adminsignup;
