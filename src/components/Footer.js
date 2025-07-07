import "../style/Footer.css";
import logo from "../pictures/Logo.svg";
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

function Footer(){
  return(
   

<footer className="footer">
  <img src={logo} alt="Logo" className="logo" />

  <div className="footer-sections">
    <div className="navigation">
      <h3>Doormat navigation</h3>
      <p>Home</p>
      <p>About</p>
      <p>Menu</p>
      <p>Reservation</p>
      <p>Order online</p>
      <p>Login</p>
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