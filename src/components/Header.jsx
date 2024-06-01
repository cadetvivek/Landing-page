import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Loding</li>
         
        </ul>
       
      </nav>
      <div className='button'>Buy Now</div>
    </header>
  );
}

export default Header;
