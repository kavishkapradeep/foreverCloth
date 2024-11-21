import './Item.css'
import React from 'react'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='item'>

      <Link to={`/product/${props.id}`}><img src={props.image[0]} alt="" /></Link>
        
        <p>{props.name}</p>
        <p>{props.description}</p>
        <p>${props.price}</p>
        <p>{props.category}</p>
        <p>{props.subCategory}</p>
        <p>{props.sizes}</p>
        <p>{props.date}</p>
        <p>{props.bestSeller}</p>
    </div>
  )
}

export default Item