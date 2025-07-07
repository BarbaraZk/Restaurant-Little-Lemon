import '../style/Header.css';
import picture from "../pictures/restauranfood.jpg"

function Header (){
  return(
    <header>
    <div className="hero-text">
      <h1>Welcome to Little Lemon</h1>
      <p>The best Mediterranean food in town.</p>
      <button>Reserve a table</button>
  </div>
  <div className="hero-image">
    <img src={picture} alt="Delicious food" />
  </div>
    </header>
  )
}

export default Header;