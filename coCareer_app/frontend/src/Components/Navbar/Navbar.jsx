import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import twitter from  '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import menu_icon from '../../assets/menu-icon.svg'
import { Link } from 'react-scroll'



const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);

  const[mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {  
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'light-nav' : ''}`}>
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <img className='logo' src={logo} alt="" />
      </Link> 
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li>
            <img className='socials sm-1' src={instagram} alt="" />
            <img className='socials sm-2' src={twitter} alt="" />
            <img className='socials sm-3' src={facebook} alt="" />
        </li> 
        <li><Link to='about' smooth={true} offset={-200} duration={500} activeClass="active" spy={true} ignoreCancelEvents={true}>About us</Link></li>
        <li><Link to='program' smooth={true} offset={-100} duration={500} activeClass="active" spy={true} ignoreCancelEvents={true}>Program</Link></li>
        <li><Link to='pricing' smooth={true} offset={-100} duration={500} activeClass="active" spy={true} ignoreCancelEvents={true}>Pricing</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-300} duration={500} activeClass="active" spy={true} ignoreCancelEvents={true}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true}  offset={-300} duration={500} activeClass="active-btn" spy={true} ignoreCancelEvents={true} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
