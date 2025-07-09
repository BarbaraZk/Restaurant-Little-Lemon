import '../style/Header.css';
import picture from "../pictures/restauranfood.jpg";
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
 

  return (
    <header className='header'>
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

          <Link to="/booking"> <button aria-label='On Click'>Reserve Table</button> </Link>
        </div>
      </section>

      <div className="banner-img">
        <img src={picture} alt="Delicious food" />
      </div>
    </header>
  );
}

export default Header;
