import { useParams } from 'react-router-dom'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
import { StoreContext } from '../../context/StoreContext'
import './Product.css'

import React, { useContext } from 'react'

const Product = () => {
    const {allProduct} = useContext(StoreContext)
    const {productId} =useParams();
    console.log(productId);
    const  product =allProduct.find((e)=>e._id===productId)
  return (
    <div>
        console.log(product);
        
        <ProductDisplay product={product}/>
    </div>
  )
}

export default Product