import "../style/Footer.css";
import React from "react";
import logo from "../pictures/Logo.svg";
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Footer(){
  return(
   

<footer className="footer">
  <img src={logo} alt="Logo" className="logo" />

  <div className="footer-sections">
    <div className="navigation">
      <h3>Important Links</h3>
      <ul>
         <li><Link to="/">Home</Link></li>
        <li><Link to="/#specials">Menu</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/booking">Reservation</Link></li>
        <li><Link to="/#specials">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>

      </ul>
    </div>

    <div className="contact">
      <h3>Contact</h3>
      <p>123 Main Street, City</p>
      <p>+48 123 456 789</p>
      <p>contact@example.com</p>
    </div>

    <div className="socialMedia">
      <h3>Social Media Links</h3>
      <div className="icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
      </div>
    </div>
  </div>
</footer>

 
   
  )
}

export default Footer;