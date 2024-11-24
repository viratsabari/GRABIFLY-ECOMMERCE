import { useEffect, useState } from "react";
import '../Styles/UserLogin.css'
import {Link} from "react-router-dom";
import ForgetPassword from "./Forgetpassword";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

const UserLogin = () => {
    let [username,setusername]=useState("");
    let [password,setpassword]=useState("");
    let navigate=useNavigate()
    
    function login(e){
        e.preventDefault();
        axios.get('http://localhost:3012/user')
       .then(res=>{
          let ogdata=res.data
          let result=ogdata.some((x)=>{
            return x.username==username && x.password==password;
          }) 
          
          console.log(result);
          
          if(result){
            navigate(`/Userhomepage`);
            let userdata=ogdata.find(user=>user.username===username)
            axios.post('http://localhost:3012/currentuser',userdata)
            .then(()=>toast.success("login successfully"))
            .catch(()=>toast.error("con't fetch data"))
          }
          else{
            toast.error("invaild user name and password")
          }
       })
       .catch(()=>{
              toast.error("connot retire data")
       })
    }

    

    return (  
        <div className="User">
              <h1>User Login Area</h1> 
            <form onSubmit={login}>
            <label htmlFor="">USERNAME</label>
            <input type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} required placeholder="Enter Your Username"/>
            <label htmlFor="">PASSWORD</label>
            <input type="text"  value={password} onChange={(e)=>{setpassword(e.target.value)}} required placeholder="Enter Your Password"/>
            <Link to={'/Signup'}> <span id="sign">New User?</span></Link>
            <Link to={'/Forgetpassword'}> <span>Forget Password?</span></Link>
            <button><span>LOGIN</span></button>
            
            </form>
        </div>
    );
}

 
export default UserLogin;