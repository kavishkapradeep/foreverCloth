import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import CartTotal from '../../components/CartTotal/CartTotal'
import { StoreContext } from '../../context/StoreContext'
import './Cart.css'

import React, { useContext, useEffect } from 'react'

const Cart = () => {
 const navigate = useNavigate();
  const {cartItem,url,products,removeFromCart,updateQuantity} =useContext(StoreContext)
  


  return (
    <div className='cart'>

      <div className="cart-topic">
        <p>Cart <span>Item</span></p>
        <p className='item-bar'></p>
      </div>

        <div className="cart-items">
            
            {
             products.map((item,index)=>{
              
                if (cartItem[item._id]>0) {
                  
                
                return(
                  <div>
                    <div className="cart-items-item">
                        <img src={url+"/images/"+item.image} alt="" srcset="" />
                        <div className="product-name">
                        <p>{item.name}</p>
                          <div className='product details'>
                          <p>${item.price}</p>
                          <p>{item.size}</p>
                          </div>
                        </div>
                        
                                          
                        <input onChange={(e)=>e.target.value === '' ||e.target.value ==='0'?null:updateQuantity(item._id,item.size,Number(e.target.value))}
                         className='input-quantity' type="number" defaultValue={cartItem[item._id]} />
                        <img onClick={()=>removeFromCart(item._id)} className='bin' src={assets.bin_icon} alt="" />
                        
                    </div>
                    <hr  className='bar'/>
                  </div>
                )
              }
             })
            }
            
        </div>
        <CartTotal/>
        <hr />
        <div className="coupen">
            <div className="add-coupen">
                <input type="text" />
                <button>ADD Coupen</button>
            </div>
            <button onClick={()=>navigate('/checkout')} className='checkouts'>Checkout</button>
        </div>
    </div>
  )
}

export default Cart