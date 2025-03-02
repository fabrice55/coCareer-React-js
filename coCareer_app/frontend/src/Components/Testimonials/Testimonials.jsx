import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.svg'
import back_icon from '../../assets/back-icon.svg'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

const slideForward = () => {
  if(tx > -50) {
    tx -= 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}

const slideBackward = () => {
  if(tx < 0) {
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials-section container'> 
      <section className='testimonials-title'>
        <div className="title"> 
          <p>Testimonials</p>
          <h2>What our customers are saying</h2>
        </div>
      </section>     
      <section className='testimonials' id='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Sarah Williams</h3>
                    <span>Job Seeker</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </li>
            
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Sagaar Sanjay</h3>
                    <span>Job Seeker</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </li>
            
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Mary Poppins</h3>
                    <span>Job Seeker</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </li> 
            
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>John Kyle</h3>
                    <span>Job Seeker</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>     
    </div>
  )
}

export default Testimonials
