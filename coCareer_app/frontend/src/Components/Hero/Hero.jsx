import React, { useEffect, useState } from 'react';
import './Hero.css';
import style_line_1 from '../../assets/styling-line-1.png';
import white_arrow from '../../assets/white-arrow.svg';
import up_arrow from '../../assets/blue-arrow.svg';
import { Link } from 'react-scroll';

const Hero = () => {
  
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <div className="hero container" id="hero">
      {/* <img className="style-line-1" src={style_line_1} alt="" /> */}
      <div className="hero-text">
        <h1>
          Empower Your Future: Get <span>Job-Ready</span> Today
        </h1>
        <p>
          Our cutting-edge program is designed to be a one-stop shop job readiness program that
          equips talented youth and job seekers with skills that help them to land job opportunities
          and accelerate their career growth in the digital era.
        </p>
        <button className="btn">
          Apply now <img src={white_arrow} alt="" />
        </button>
      </div>
      <div className={`home-btn ${sticky ? 'sticky-btn' : ''}`} id="home-btn">
        <Link to="hero" smooth={true} offset={0} duration={500}>
          <button><img src={up_arrow} alt="" /></button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
