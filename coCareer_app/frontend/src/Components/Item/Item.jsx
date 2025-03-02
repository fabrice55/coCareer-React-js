import React from 'react'
import './Item.css'

const Item = ({id,title, description, image}) => {
  return (
    <div className={`item row-${id}`}>
        <div className="item-text">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <img src={image} alt="" loading='eager'/>
    </div>
  )
}

export default Item
