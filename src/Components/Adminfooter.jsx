import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../Styles/Adminfooter.css'; 

const Adminfooter = () => {
    return (
        <footer className="admin-footer">
            <div className="footer-content">
                <div className="footer-logo">
                    Admin Dashboard
                </div>
                <div className="footer-links">
                   <Link to="/Adminhomepage/PrivacyPolicy">Privacy Policy</Link>
                    <Link to="/Adminhomepage/TermsOfService">Terms of Service</Link>
                    <Link to="/Adminhomepage/ContactUs">Contact Us</Link>
                </div>
                <div className="footer-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                © {new Date().getFullYear()} Admin Dashboard. All rights reserved.
            </div>
        </footer>
    );
}

export default Adminfooter;
