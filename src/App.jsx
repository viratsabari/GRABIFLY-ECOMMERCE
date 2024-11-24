import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Components/Landing'
import AdminLogin from './Components/AdminLogin'
import UserLogin from './Components/UserLogin'
import Forgetpassword from './Components/Forgetpassword'
import Signup from './Components/Signup'
import Adminsignup from './Components/Adminsignup'
import Adminhomepage from './Components/Adminhomepage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Userhomepage from './Components/Userhomepage';
import 'sweetalert2/dist/sweetalert2.min.css';



export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/AdminLogin' element={<AdminLogin/>}/>
        <Route path='/UserLogin' element={<UserLogin/>}/>
        <Route path='/ForgetPassword' element={<Forgetpassword/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Adminsignup' element={<Adminsignup/>}/>
        <Route path='/Adminhomepage/*' element={<Adminhomepage/>}/>
        <Route path='/Userhomepage/*' element={<Userhomepage/>}/>
        
      </Routes>
      </BrowserRouter>
        <ToastContainer/>
    </div>
  )
}
