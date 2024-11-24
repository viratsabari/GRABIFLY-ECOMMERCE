import { useEffect, useState } from "react";
import '../Styles/AdminLogin.css';
import { Link } from "react-router-dom";
import ForgetPassword from "./Forgetpassword";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const AdminLogin = () => {
    let [username, setusername] = useState("");
    let [password, setpassword] = useState("");
    let [details, setdeatils] = useState([]);
    // console.log(username);
    // console.log(password);
    
    useEffect(() => {
        let fetchdata = async () => {
            try {
                let result = await axios.get('http://localhost:3012/Admin');
                console.log(result);
                setdeatils(result.data);
            }
             catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchdata();
    }, []);
    
    let navigate = useNavigate();
    
    let vaildate = async (e) => {
        e.preventDefault();
        if (details.some((x) => x.username === username && x.password === password)) {
            toast.success("Login successfully");
            navigate('/Adminhomepage');
            let store = details.find(y => y.username === username);
            axios.post('http://localhost:3012/currentadmin', store)
                .then(() => console.log("Data stored successfully"))
                .catch(() => console.log("Error storing data"));
        } else {
            toast.error("Invalid username or password");
        }
    };

    return (
        <div className="Admin">
            <h1>Admin Login Area</h1>
            <form onSubmit={vaildate}>
                <label htmlFor="">USERNAME</label>
                <input type="text" value={username} onChange={(e) => { setusername(e.target.value) }} required placeholder="Enter Your Username" />
                <label htmlFor="">PASSWORD</label>
                <input type="text" value={password} onChange={(e) => { setpassword(e.target.value) }} required placeholder="Enter Your Password" />
                <Link to={'/Forgetpassword'}><span>Forget Password?</span></Link>
                <Link to={'/Adminsignup'}><span id="adminsign">AdminSignup</span></Link>
                <button><span>LOGIN</span></button>
            </form>
        </div>
    );
}

export default AdminLogin;
