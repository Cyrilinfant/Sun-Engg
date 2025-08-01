
import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.jpg'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';


const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{ 
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])
  const [mobileMenu , setMobileMenu] = useState(false)
  const toggleMenu = () =>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true)
  }


  return (
   <nav className={`container ${sticky ? "dark-nav" : " "}`}>
    <img src={logo} alt="logo" className='logo'/>
    <ul className={mobileMenu ?'':'hide-mobile-menu'}>
        <li> <Link to='hero' smooth={true}offset={-260} duration={500}>Home</Link></li>
        <li><Link to='mission' smooth={true}offset={-260} duration={500}>Values</Link></li>
        <li> <Link to='about' smooth={true}offset={-260} duration={500}>About Us</Link></li>
        <li><Link to='timeline-container' smooth={true}offset={-260} duration={500}>Projects</Link></li>
        <li><Link to='contact' smooth={true}offset={-260} duration={500} className='con-btn'>Contact Us</Link></li>
    </ul>
    <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
   </nav>
  )
}

export default Navbar