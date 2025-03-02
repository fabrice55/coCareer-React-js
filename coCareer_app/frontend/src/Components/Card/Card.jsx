import React from 'react'
import './Card.css'
import blue_arrow from '../../assets/blue-arrow.svg'

const Card = ({title, paragraph}) => {
  return (
    <div className='card'>
        <h3>{title}</h3>
        <p>{paragraph}</p>
        <a href="/about.pdf" download> Learn More <img src={blue_arrow} alt=""/></a>
    </div>
  )
}

export default Card
