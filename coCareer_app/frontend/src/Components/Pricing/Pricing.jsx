import React from 'react'
import './Pricing.css'
import price_icon_1 from '../../assets/pricing-icon-1.svg'
import price_icon_2 from '../../assets/pricing-icon-2.svg'
import price_icon_3 from '../../assets/pricing-icon-3.svg'
import check_icon from '../../assets/check-icon.svg'

const Pricing = () => {
  return (
    <div className='pricing' id='pricing'>
{/*-------------------------Section-1------------ ---*/}

        <section className='pricing-section'>
          <div className="container">
            <div className="title">
                <p>PRICING</p>
                <h2>coCareer Program Fees</h2>
            </div>
            <div className="pricing-cards">
              <div className="pricing-card pricing-card-1">
                <div className="icon">
                  <img src={price_icon_1} alt="" />
                </div>
                <h3>BASIC</h3>
                <p><span className='price'>200,000</span>RWF/person</p>
                <p>This package applies to<span className='volume'>1-50</span>people.</p>
                <button className='btn'>Sign up now</button>
              </div>

              <div className="pricing-card pricing-card-2">
                <div className="icon">
                  <img src={price_icon_2} alt="" />
                </div>
                <h3>ADVANCED</h3>
                <p><span className='price'>150,000</span>RWF/person</p>
                <p>This package applies to<span className='volume'>51-100</span>people.</p>
                <button className='btn'>Sign up now</button>
              </div>

              <div className="pricing-card pricing-card-2">
                <div className="icon">
                  <img src={price_icon_2} alt="" />
                </div>
                <h3>ADVANCED</h3>
                <p><span className='price'>100,000</span>RWF/person</p>
                <p>This package applies to<span className='volume'>101-200</span>people.</p>
                <button className='btn'>Sign up now</button>
              </div>

              <div className="pricing-card pricing-card-2">
                <div className="icon">
                  <img src={price_icon_2} alt="" />
                </div>
                <h3>ADVANCED</h3>
                <p><span className='price'>80,000</span>RWF/person</p>
                <p>This package applies to<span className='volume'>201-400</span>people.</p>
                <button className='btn'>Sign up now</button>
              </div>

              <div className="pricing-card pricing-card-2">
                <div className="icon">
                  <img src={price_icon_2} alt="" />
                </div>
                <h3>ADVANCED</h3>
                <p><span className='price'>60,000</span>RWF/person</p>
                <p>This package applies to<span className='volume'>401-600</span>people.</p>
                <button className='btn'>Sign up now</button>
              </div>

              <div className="pricing-card pricing-card-3">
                <div className="icon">
                  <img src={price_icon_3} alt="" />
                </div>
                <h3>PREMIUM</h3>
                <p><span className='price'>50,000</span>RWF/person</p>
                <p>This package applies to<span className='volume'>700+</span>people.</p>
                <button className='btn'>Sign up now</button>
              </div>
            </div>
          </div>
        </section>

{/* --------------------- section-2-----------------------*/}
        
        <section className='package-section'>
          <div className="package container">
            <table className='table'>
              <caption><h2>Features Included In Each Package </h2></caption>
              <thead>
                <tr>
                  <th scope='col'>Features</th>
                  <th scope='col' className='col-2'>Included</th>
                </tr>
              </thead>
              <tbody>
                <tr className='colored-row'>
                  <td data-label='feature'>Access to the 6-week program Modules and Scenario practices for all skills packages</td>
                  <td className='col-2'><img src={check_icon} alt="" className='icon'/></td>
                </tr>
                <tr>
                  <td data-label='feature'>Peer Learning Sessions and project-based activities</td>
                  <td className='col-2'><img src={check_icon} alt="" className='icon'/></td>
                </tr>
                <tr className='colored-row'>
                  <td data-label='feature'>Online access via Google Classroom and On-site Learning at coCareer Hub</td>
                  <td className='col-2'><img src={check_icon} alt="" className='icon'/></td>
                </tr>
                <tr>
                  <td data-label='feature'>Certificate of Completion</td>
                  <td className='col-2'><img src={check_icon} alt="" className='icon'/></td>
                </tr>
                <tr className='colored-row'>
                  <td data-label='feature'>Personalized learning pathway and career guidance</td>
                  <td className='col-2'><img src={check_icon} alt="" className='icon'/></td>
                </tr>
                <tr>
                  <td data-label='feature'>Expert-led sessions</td>
                  <td className='col-2'><img src={check_icon} alt="" className='icon'/></td>
                </tr>
                <tr className='colored-row'>
                  <td data-label='feature'>Access to skills & jobs events organized by coCareer</td>
                  <td className='col-2'><img src={check_icon} alt="" className='icon'/></td>
                </tr>
                <tr>
                  <td data-label='feature'>One-on-one career coaching sessions</td>
                  <td className='col-2'><img src={check_icon} alt="" className='icon'/></td>
                </tr>
                <tr className='colored-row'>
                  <td data-label='feature'>Unlimited access to the expert sessions for 2 months after the program completion</td>
                  <td className='col-2'><img src={check_icon} alt="" className='icon'/></td>
                </tr>
                <tr>
                  <td data-label='feature'>Access to an exclusive community of alumni for ongoing career growth support and job placement assistance</td>
                  <td className='col-2'><img src={check_icon} alt="" className='icon'/></td>
                </tr>
              </tbody>
            </table>
            <div className="call-to-action">
              <p><span className='warning'>Note:</span> From 15+ Individuals and for large classes, there might be a cost for additional large classroom workshops.</p>
              <div className="btns">
              <button className='btn btn-1'>Learn more</button>
              <button className='btn btn-2'>Sign up now</button>
              </div>
            </div>
            
          </div>
        </section>
      
    </div>
  )
}

export default Pricing
