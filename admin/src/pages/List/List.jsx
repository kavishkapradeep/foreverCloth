import './List.css'
import axios from "axios"
import {toast} from 'react-toastify'
import React, { useEffect, useState } from 'react'
import {assets} from '../../assets/assets'


const List = ({url}) => {
  const [list,setList] =useState([]);

  const fetchList = async ()=>{
    const response = await axios.get(`${url}/api/cloth/list`);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error")
    }
  }

  const removeCloth = async (clothId)=>{
    const response =await axios.post(`${url}/api/cloth/remove`,{id:clothId});
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    } else {
      toast.error("Error")
    }
  }

  useEffect(()=>{
    fetchList();
  },[])
  return (
    <div className='list-container flex-col'>
      <div className="list-topic-main">
       <div className="list-topic">
       <p>All FOOD <span>List</span></p>
       <p className="bar"></p>
       </div>
      
      </div>
      <div className="list-table">
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>SubCategory</b>
            <b>Price</b>
            <b>Sizes</b>
            <b>Update</b>
            <b>Remove</b>
          </div>
          {list.map((item,index)=>{
            return(
              <div className="list-table-format">
                <img src={`${url}/images/`+item.image} alt="" />
                
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.subCategory}</p>
                <p>{item.price}</p>
                <p>{item.sizes.join(',')}</p>
                <p><img id='update'  className='cursor' src={assets.update_icon} alt="" /></p>
                <p  onClick={()=>removeCloth(item._id)}className='cursor'>X</p>
              </div>
            )
          })

          }

      </div>
  </div>
  )
}

export default List