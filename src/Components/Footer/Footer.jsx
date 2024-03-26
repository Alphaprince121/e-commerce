import React from 'react'
import '../Footer/Footer.css'
import logo from '../Assets/logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={logo} alt="" />
                <h1>Footwear</h1>
            </div>
            <ul className="footer-links">
                <l1>Company</l1>
                <l1>Products</l1>
                <l1>Offices</l1>
                <l1>About</l1>
                <l1>Contact</l1>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <FaInstagram />
                </div>
                <div className="footer-icons-container">
                    <FaWhatsapp />
                </div>
                <div className="footer-icons-container">
                    <FaFacebookF />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @2024 - All Right Reserved.</p>
            </div>

        </div>
    )
}

export default Footer
