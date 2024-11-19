import './Item.css'
import React from 'react'

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <p>${props.price}</p>
    </div>
  )
}

export default Item