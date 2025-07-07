import logo from "../pictures/Logo.svg";
import '../style/Nav.css';

function Nav (){
  return(
    <nav>
      <img src={logo} alt="Little Lemon logo" />
 <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#reservations">Reservations</a></li>
      <li><a href="#orderOnline">Order online</a></li>
      <li><a href="#login">Login</a></li>
    </ul>
    </nav>
   
  )
}

export default Nav;