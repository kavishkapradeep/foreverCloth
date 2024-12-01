import axios from 'axios'
import { StoreContext } from '../../context/StoreContext'
import './MyOrders.css'

import React, { useContext, useEffect, useState } from 'react'

const MyOrders = () => {
  const {url,token} =useContext(StoreContext)
  const [data,setData] =useState([]);

  const fetchOrders = async ()=>{
     const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
     setData(response.data.data);
     console.log(response.data.data);
      
  }

  useEffect(()=>{
    if (token) {
      fetchOrders()
    }
  },[token])
  return (
    <div>

    </div>
  )
}

export default MyOrders