import './Add.css'
import {assets} from '../../assets/assets'
import React, { useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'
const Add = ({url}) => {
  const [image,setImage] =useState(false);
  const [data,setData] =useState({
    name:"",
    description:"",
    price:"",
    category:"relevant",
    subCategory:"relevant",
    sizes: ['relevant', 'relevant', 'relevant', 'relevant','relevant'], 
  })

  const onChangeHandler = (event)=>{
    const name=event.target.name;
    const value=event.target.value;
    if (name.startsWith('sizes')) {
      const index = parseInt(name.replace('sizes', ''), 10) - 1; // Get the correct index for the sizes array
      setData((prevData) => {
        const newSizes = [...prevData.sizes];
        newSizes[index] = value; // Update the size at the correct index
        return { ...prevData, sizes: newSizes };
      });
    } else {
      setData((prevData) => ({ ...prevData, [name]: value }));
    }
  }


  const onSubmitHandler = async (event)=>{
      event.preventDefault();
      const formData= new FormData();
      formData.append("name",data.name)
      formData.append("description",data.description)
      formData.append("price",data.price)
      formData.append("category",data.category)
      formData.append("subCategory",data.subCategory)
      formData.append("image",image)
      if (Array.isArray(data.sizes)) {
         data.sizes.forEach((size) => {
           if (size !== 'relevant') {
             formData.append('sizes[]', size); // Append each valid size
           }
         });
       }
   

      const response = await axios.post(`${url}/api/cloth/add`,formData);

      if (response.data.success) {
         setData({
            
            name:"",
            description:"",
            price:"",
            category:"relevant",
            subCategory:"relevant",
            sizes: ['relevant', 'relevant', 'relevant', 'relevant'], 
         })
         setImage(false)
         console.log("success");
         toast.success(response.data.message)
         
      } else {
         console.log("this is not working");
         toast.error(response.data.message)
      }
  }

  return (
    <div className='add'>
       <form  className="flex-col" onSubmit={onSubmitHandler} >
        <div className="add-details">
        <div className="add-left">
         <div className="add-img-upload ">

            <p>Upload Image</p>
            <label htmlFor="image">
                <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" srcset="" />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />

            
         </div>
         <div className="add-product-name flex-col">
            <p>Product name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Your name ' required/>
         </div>

         <div className="add-product-description flex-col">
           <p>Product Description</p>
           <textarea onChange={onChangeHandler}value={data.description} name="description" rows="6" placeholder='Enter details Product' required></textarea>
         </div>
         </div>
         <div className="add-right">
         <div className="category-details flex-col">
          <p>Category</p>
           <div className="category-content">
            <div className="category">
            <p>Product Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category" id='Category' required >
               <option value="relevant">relevant</option>
               <option value="Men">Men</option>
               <option value="Women">Women</option>
               <option value="Kids">Kids</option>
            </select>
            </div>
            <div className="subCategory">
            <p>Product SubCategory</p>
            <select onChange={onChangeHandler} value={data.subCategory} name="subCategory" id="Category" required>
                  <option value="relevant">relevant</option>
                  <option value="Topwear">Topwear</option>
                  <option value="Bottomwear">Bottomwear</option>
                  <option value="Winterwear">Winterwear</option>
            </select>
            </div>
            </div>
         </div>

         <div className="add-category-price flex-col">
          <div className="add-price">
            <p>Product Price </p>
            <input onChange={onChangeHandler} type="Number" value={data.price} name='price' placeholder='20$' required  />
            </div>
            <div className="add-sizes">
            <p>Product Sizes</p>
            {['sizes1', 'sizes2', 'sizes3', 'sizes4',].map((sizeField, index) => (
                  <select key={index} name={sizeField} onChange={onChangeHandler} value={data.sizes[index]}>
                    <option value="relevant">relevant</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                ))}
                
            </div>
         </div>
         </div>
         </div>

         <button type='submit' className='add-btn'>Add</button>
       </form>
    </div>
  )
}

export default Add