import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../Styles/Userfooter.css'; 

const Userfooter = () => {
    return (
        <footer className="user-footer">
            <div className="footer-content">
                <div className="footer-logo">
                    User Dashboard
                </div>
                <div className="footer-links">
                    <Link to="/Userhomepage/PrivacyPolicy">Privacy Policy</Link>
                    <Link to="/Userhomepage/TermsOfService">Terms of Service</Link>
                    <Link to="/Userhomepage/ContactUs">Contact Us</Link>
                </div>
                <div className="footer-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon />
                    </a>
                    <a href="www.linkedin.com/in/sabari-nathan-828123246" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                © {new Date().getFullYear()} User Dashboard. All rights reserved.
            </div>
        </footer>
    );
}

export default Userfooter;
