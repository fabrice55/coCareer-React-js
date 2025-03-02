import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.svg'
import blue_arrow from '../../assets/blue-arrow.svg'


const About = ({setPlayState}) => {
  return (
    <div id='about'>      
{/*----------------------Section-1-------------------- */}   
      <section className='about-section'>
        <div className=" about container">
          <div className="about-left">
          <img src={about_img} alt="" className='about-img'/>
          <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
          </div>
          <div className="about-right">
          <h3>ABOUT coCareer</h3>
          <h2>Equip Young Talents With Modern Skills</h2>
          <p>coCareer is a one-stop shop job readiness 
          program by coCareer that equips young talents and 
          job seekers with 21st-century skills that help 
          them to land job opportunities and accelerate 
          their career growth in the digital era. 
          Through this program, the participants develop 
          digital confidence and soft skills for the modern
          job market.</p>
          <p>The program accelerates their career growth and
          increases their competencies for navigating the 
          challenges and opportunities available in the 
          current digital age and knowledge economy. 
          21st-century skills refer to a set of abilities,
          competencies, and knowledge that are essential 
          for success in today's rapidly changing world.</p>
          <a href="/about.pdf" download>
            Learn More <img src={blue_arrow} alt=""/>
          </a>
          </div>
        </div>
      </section>
{/* -------------------------------------section-2-----------------------*/ }

      <section className='mission-section'>
        <div className="mission container">
          <h2>Our Mission</h2>
          <p>Empowering young people to thrive in 
          the Knowledge Economy and Future of work.</p>
        </div>
      </section>

    </div>
  )
}

export default About
