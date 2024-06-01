import React from 'react';
import './HeroSection.css';
import background from '../images/background.png';
function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Introduce Your Product Quickly & Effectively</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis non sapiente 
            alias id repellat debitis odio ipsum tempora provident similique neque ratione,
             praesentium quod esse sed tenetur, dignissimos consequatur. Repudiandae.
        Magnam fugit, aperiam quia eum dolorum dignissimos, error quisquam officia dicta 
        placeat sunt impedit perferendis optio nostrum rem delectus modi quaerat non recusandae? 
      
       </p>
        <div className="hero-buttons">
          <button className="primary-btn">Purchase UI Kit</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>
      <div className='hero-image'></div>

    </section>
  );
}

export default HeroSection;
