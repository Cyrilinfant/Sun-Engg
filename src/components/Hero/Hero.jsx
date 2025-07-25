import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>SUN ENGINEERING</h1>
        <p>
          SUN ENGINEERING is a multi-disciplinary engineering Company
          established in 2005 based at TRICHY, India. A dedicated team of highly
          qualified engineers with vast experience in analysis, design and
          application engineering supports the company. Economical and quality
          engineering service meeting the delivery schedule is the motto of our
          company.
        </p>
        <Link to='mission' smooth={true}offset={-260} duration={500} className='btn'>Explore more <img src={dark_arrow} alt="" /></Link>
        
      </div>
    </div>
  );
}

export default Hero