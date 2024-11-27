import './Add.css'
import {assets} from '../../assets/assets'
import React, { useState } from 'react'

const Add = () => {
  const [image,setImage] =useState(false);
  return (
    <div className='add'>
       <form  className="flex-col">
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
            <input type="text" name='name' placeholder='Your name ' required/>
         </div>

         <div className="add-product-description flex-col">
           <p>Product Description</p>
           <textarea name="description" rows="6" placeholder='Enter details Product' required></textarea>
         </div>
         </div>
         <div className="add-right">
         <div className="category-details flex-col">
          <p>Category</p>
           <div className="category-content">
            <div className="category">
            <p>Product Category</p>
            <select name="category" id='Category' >
               <option value="relevant">relevant</option>
               <option value="Men">Mens</option>
               <option value="Women">Womens</option>
               <option value="Kids">Kids</option>
            </select>
            </div>
            <div className="subCategory">
            <p>Product SubCategory</p>
            <select name="subCategory" id="Category">
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
            <input type="Number" name='price' placeholder='20$' required  />
            </div>
            <div className="add-sizes">
                <p>Sizes</p>
                <select name="sizes" >
                    <option value="relevant">relevant</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
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