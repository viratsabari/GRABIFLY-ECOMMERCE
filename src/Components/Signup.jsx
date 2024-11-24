import { useEffect, useState } from 'react';
import  axios  from 'axios';
import '../Styles/Signup.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';       


function Signup(){
    let [email,setemail]=useState("")
    let [username,setusername]=useState("");
    let [password,setpassword]=useState("");
    let [retypepassword,setretypepassword]=useState("");
     let navigate=useNavigate();
    let  storedata ={email,username,password,retypepassword}
    function adddata(e) {
        e.preventDefault();
        axios.get('http://localhost:3012/user')
            .then(response => {
                let existingData = response.data;
                let duplicate = existingData.some(x => x.email === email || x.username === username);
    
                if (duplicate) {
                    toast.error("This username or email already exists");
                } else {
                    if (password === retypepassword) {
                        axios.post('http://localhost:3012/user', storedata)
                            .then(() =>  {
                                navigate('/UserLogin')
                                toast.success("signup succesfully")
                            })
                         .catch(() =>  toast.error("try different username or email id"))
                    } else {
                        alert("Password and retype password must match");
                    }
                }
            })
            .catch(() => alert("Data could not be retrieved"));
    }
    


     
return(
        <div  className="singupmethod">
       <div className="usingphone">
       <h1>ENTER THE SIGNUP DETAILS</h1>
        <form id="usingphone">

        <label htmlFor="">ENTER YOUR EMAIL ID</label>
           <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} required />
           <label htmlFor="">ENTER YOUR USERNAME</label>
           <input type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} required/>
           <label htmlFor="">ENTER PASSWOED</label>
           <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} required />
           <label htmlFor="">RE-ENTER PASSWORD</label>
           <input type="password" value={retypepassword} onChange={(e)=>{setretypepassword(e.target.value)}} required/>
           <button onClick={adddata}><span>SINGUP</span></button>
           </form>
        </div> 
        </div>
        
    )
}
export default Signup;