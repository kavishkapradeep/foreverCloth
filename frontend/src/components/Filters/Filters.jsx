import './Fillters.css'
import React from 'react'

const Filters = () => {
  return (
    <div className='filters-container'>
        <h2>Filtters</h2>
        <div className="categories">
            <p>CATEGORIES</p>
            <ul className="categories-checkbox">
            <li><input type="checkbox" />Men</li>
            <li><input type="checkbox" />Women</li>
            <li><input type="checkbox" />Kids</li>
            </ul>           
        </div>
        <div className="categories">
            <p>Type</p>
            <ul className="categories-checkbox">
            <li><input type="checkbox" />Topwear</li>
            <li><input type="checkbox" />Bottemwear</li>
            <li><input type="checkbox" />Winterwear</li>
            </ul>
        </div>
    </div>
  )
}

export default Filters