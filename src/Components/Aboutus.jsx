import React, { useRef } from 'react';
import image from '../Assets/my photo.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; 
import '../Styles/Aboutus.css'
const Aboutus = () => {

  const name = useRef();
  const email = useRef();
  const feedback = useRef();

  const userfeedback = async (e) => {
    e.preventDefault(); 
    const upoload = {
      name: name.current.value,
      email: email.current.value,
      feedback: feedback.current.value
    };

    try {
      const response = await axios.post('http://localhost:3012/userfeedback', upoload);
      console.log('Feedback submitted successfully:', response.data);
      
      
      Swal.fire({
        position: "center-center",
        iconHtml: '<img src="https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png" width="90" height="95" />',
        title: "Your feedback has been saved",
     
        showConfirmButton: false,
        timer: 3000,
      });

     
      name.current.value = '';
      email.current.value = '';
      feedback.current.value = '';
    } catch (error) {
      console.error("Error occurred during feedback submission:", error);
      toast.error('Something went wrong. Please try again!');
    }
  };

  return (
    <div className="aboutus">
      <img src='https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_2035379.jpg' alt="About Me" />
      <h1>About Me</h1>
      <p>
        I am Sabarinathan, a dedicated professional with a profound passion for web development. Holding a Bachelor's degree in Engineering, I have cultivated a robust foundation in computer science and programming principles. My journey in the realm of technology has been fueled by a relentless drive to innovate and create meaningful solutions.
      </p>
      <h1>SHARE YOUR EXPERIENCE ON THE WEBSITE WITH ME</h1>
      <div className="about">
      <form onSubmit={userfeedback}>
        <label>Your Name</label>
        <input type="text" ref={name} placeholder='Enter Your name' />
        <label>Email ID</label>
        <input type="text" ref={email}  placeholder='Enter Your Email'/>
        <textarea ref={feedback} placeholder="Give Your Feedback"></textarea>
        <button type="submit">Submit</button>

      </form>
      </div>
    </div>
  );
};

export default Aboutus;
