import './Navbar.css'
import {assets} from '../../assets/assets'

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = ({setToken}) => {

  
  return (
    <div className='navbar-content'>
      
      <img className='logo' src={assets.logo} alt="" srcset="" />
      <hr />
      
      <div className="navbar-details">
          <NavLink to='/add' className="navbar-option">
          <img src={assets.add_icon} alt="" srcset="" />
          <p>Add</p>
          </NavLink>  

          <NavLink to='/list' className="navbar-option">
            <img src={assets.parcel_icon} alt="" srcset="" />
            <p>List</p>
          </NavLink>

          <NavLink to='/orders' className='navbar-option'>
            <img src={assets.order_icon} alt="" />
            <p>Orders</p>
          </NavLink>
      </div>
      
      
      
      <button className='logout' onClick={()=>setToken('')}>LOG OUT</button>
    </div>
  )
}

export default Navbar