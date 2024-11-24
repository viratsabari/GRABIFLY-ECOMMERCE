import React from "react";
import {Link} from "react-router-dom";
import '../Styles/Landing.css'

const Landing = () => {
    return (  
<div className="page">
           <h1>WELCOME TO GRABIFY</h1>
              <span>Let's Shop Now...</span>
              <div className="login">
              <div className="adminarea">
                <h6>CLICK HERE TO ADMIN LOGIN</h6>
               <Link to={'/AdminLogin'} > <img src="https://img.freepik.com/free-vector/business-user-cog_78370-7040.jpg?size=626&ext=jpg" alt="Admin Area" /></Link>
               </div>
                <div className="userarea">
                <h6>CLICK HERE TO USER LOGIN</h6>
                <Link to={'/UserLogin'}> <img src="https://img.freepik.com/free-vector/leader-concept-avatars_1025-182.jpg?ga=GA1.1.1901846519.1728463472&semt=ais_hybrid" alt="" /></Link>
               </div>
               </div>
          </div>
       

    );
}
 
export default Landing;
