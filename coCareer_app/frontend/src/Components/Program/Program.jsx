import React from 'react'
import './Program.css'
{/*import blue_arrow from '../../assets/blue-arrow.svg'*/}
import program_img_1 from '../../assets/program-1.jpg'
import program_img_2 from '../../assets/program-2.jpg'
import program_img_3 from '../../assets/program-3.jpg'
import program_img_4 from '../../assets/program-4.jpg'
import program_img_5 from '../../assets/program-5.jpg'
import instructor_1 from '../../assets/instructor-1.png'
import instructor_2 from '../../assets/instructor-2.jpg'
import instructor_3 from '../../assets/instructor-3.png'
import Title from '../Title/Title'
import Card from '../Card/Card'
import Item from '../Item/Item'


const Program = () => {
  return (
    <div id='program'>
{/*------------------------Section-1------------------*/}

      <section className='program-section'>
        <div className="container" >
          <Title subTitle='Our Programs' title='What We Offer'/>
          <div className='program-card'>
            <Card 
              title='Foundational Digital Skills Proficiency' 
              paragraph='From basic computer literacy to advanced 
              digital proficiency, our program ensures 
              that participants are digitally confident, 
              tech-savvy, and have the technical know-how
              to thrive in digital work environments. 
              Master essential software, applications, 
              tools, and skills to operate confidently 
              in the digital world.'/>

            <Card 
              title='Soft Skills' 
              paragraph="In today's rapidly evolving job 
              market, soft skills are key to career 
              success and are being demanded by every
              employer. Soft skills refer to personal
              attributes and interpersonal abilities
              that enhance collaboration, communication, 
              and overall effectiveness in the workplace. 
              These skills are transferable and applicable 
              across industries, making them essential for professional
              growth and advancement." />

            <Card 
              title='Workplace Tools' 
              paragraph='Learn how to use the tools and technologies
              commonly used in today’s workplaces, 
              from project management platforms to 
              collaborative tools and productivity 
              software'/>

            <Card 
              title='Career Skills' 
              paragraph='Whether you are pursuing freelancing, 
              remote work, consulting, entrepreneurship 
              or traditional employment, our program equips
              you with the career skills needed to 
              succeed in your chosen career. Gain the 
              knowledge and strategies to navigate job 
              marketing, craft compelling resumes, build 
              your profile & portfolio, and master job 
              interview skills.'/>
          </div>
        </div>
      </section>
{/*------------------------Section-2------------------*/}

      <section className='learning-section'>
        <div className='container'>
          <Title subTitle='' title='Our Learning Approach'/>
          <div className="items">
            <Item
              id={1} 
              title='Project Based Learning' 
              description="This is a learner-centered 
              approach which involves youths acquiring
              skills by actively working on real work 
              projects." 
              image={program_img_1}/>

            <Item 
              id={2}
              title='Blended Learning'
              description="This is an approach that 
              combines online and in class learning."
              image={program_img_2}/>
              
            <Item 
              id={3}
              title='Peer Learning'
              description="This is an interactive learning 
                      approach where leverage peer feedback 
                      and projects to improve their skills." 
              image={program_img_3}/>
              
            <Item 
              id={4}
              title='Personalized Learning'
              description="It's a method which allows 
                      Learners to take control of 
                      their learning journey based 
                      on their preferences." 
              image={program_img_4}/>
              
            <Item 
              id={5}
              title='Expert Led-Sessions'
              description="It’s a way to learn directly 
                      from someone who is highly skilled in a
                      particular subject." 
              image={program_img_5}/>
          </div>
        </div>
      </section>     
{/*------------------------Section-2------------------*/}

      <section className='instructor-section'>
        <div className='instructor container'>
          <div className="instructor-img">
              <img src={instructor_1} alt="" className='instructor-img-1'/>
              <img src={instructor_2}  alt="" className='instructor-img-2'/>
              <img src={instructor_3}  alt="" className='instructor-img-3'/>
          </div>
          <div className="instructor-text">
              <h2>Our Instructors and Mentors</h2>
              <p>coCareer curriculum is delivered
              by various industry experts and mentors.</p>
          </div>
        
        </div>
      </section>
    </div>
    
  )
}

export default Program
