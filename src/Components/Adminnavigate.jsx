import Dropdown from 'react-bootstrap/Dropdown';
import '../Styles/Adminnavigate.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Admindropdown() {
    let [displaydata, setdisplaydata] = useState([]);
    let username = "";
    let navigate = useNavigate();

    useEffect(() => {
        let fetch = async () => {
            try {
                let display = await axios.get('http://localhost:3012/currentadmin');
                setdisplaydata(display.data);
            } 
            catch {
                console.log("Error fetching data:");
            }
        };
        fetch();
    }, []);

    if (displaydata.length > 0) {
        username = displaydata[0]?.username; 
    }

    function logout(userId) {
        axios.delete(`http://localhost:3012/currentadmin/${userId}`)
          .then(() => {
            navigate('/Adminlogin');
            toast.success("Logged out successfully");
          })
          .catch(() => toast.error("Unable to sign out"));
      }

    return (
        <div className="navigate">
            <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                    {username}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/Adminhomepage/Adminprofile">PROFILE</Dropdown.Item>
                    <Dropdown.Item href="/Adminhomepage/Aboutus">ABOUT US</Dropdown.Item>
                    <Dropdown.Item onClick={() => logout(displaydata[0]?.id)}>LOGOUT 😔</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <ToastContainer />
        </div>
    );
}

export default Admindropdown;

