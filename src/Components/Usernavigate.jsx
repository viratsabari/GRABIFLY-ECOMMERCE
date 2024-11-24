import Dropdown from 'react-bootstrap/Dropdown';
import '../Styles/Adminnavigate.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Userdropdown() {
  const [displaydata, setdisplaydata] = useState([]);
  const navigate = useNavigate();
  const username = displaydata.length > 0 ? displaydata[0]?.username : "Guest";

  useEffect(() => {
    const fetch = async () => {
      try {
        const display = await axios.get('http://localhost:3012/currentuser');
        setdisplaydata(display.data);
      } 
      catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetch();
  }, []);

  function logout(userId) {
    axios.delete(`http://localhost:3012/currentuser/${userId}`)
      .then(() => {
        navigate('/Userlogin');
        toast.success("Logged out successfully");
      })
      .catch(() => toast.error("Unable to sign out"));
  }

  return (
    <div className="usernavigate">
      <Dropdown>
        <Dropdown.Toggle variant="info" id="dropdown-basic">
          {username}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/UserhomePage/Userprofile">PROFILE</Dropdown.Item>
          <Dropdown.Item as={Link} to="/UserhomePage/Aboutus">ABOUT US</Dropdown.Item>
          <Dropdown.Item onClick={() => logout(displaydata[0]?.id)}>LOGOUT 😔</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <ToastContainer />
    </div>
  );
}

export default Userdropdown;
