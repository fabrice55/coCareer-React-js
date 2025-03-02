import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import whatsapp_icon from '../../assets/whatsapp-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.svg'

const Contact = () => {
  return (
    <div className='contact-section container'>
      <section className='contact-title'>
        <div className="title">
            <p>Contact us</p>
            <h2>Get in touch</h2>
        </div>
      </section>
      <section className='contact' id='contact'>
        <div className="contact-col">
            <h3>Send us a message</h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our participants and community.</p>
            <ul>
                <li><img src={mail_icon} alt="" />info@cocareer.com</li>
                <li><img src={phone_icon} alt="" />+250701234567</li>
                <li><img src={whatsapp_icon} alt="" />+250701234567</li>
                <li><img src={location_icon} alt="" />1 KG 000 St, Kigali, Rwanda</li>
            </ul>
        </div>
        <div className="contact-col">
            <form action="">
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile' required/>
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
