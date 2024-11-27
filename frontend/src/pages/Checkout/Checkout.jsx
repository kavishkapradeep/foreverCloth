import CartTotal from '../../components/CartTotal/CartTotal'

import './Checkout.css'

import React from 'react'

const Checkout = () => {
  return (
    <div>
        <div className="checkout-title">
    <p>CHECKOUT <span>PAYMENT</span></p>
    <p className='item-bar'></p>
        </div>
    <div className='checkout'>
        
        <div className="cart-left">
            <div className="cart-name">
                <input   className='cart-name-topic' type="text" placeholder='First Name' required />
                <input  className='cart-name-topic' type="text" placeholder='Last Name' required />
            </div>
            <input  className='cart-personal'type="email" placeholder='Email'  required />
            <input  className='cart-personal' type="number" maxLength='10' placeholder='Number' required />
            <div className="cart-address">
                <input className='cart-personal' type="text" placeholder='Street Address' required />
                <div className="cart-address">
                    <input className='cart-name-topic'  type="text" placeholder='Town' required />
                    <input  className='cart-name-topic' type="text" placeholder='State' required/>
                </div>
                <div className="country">
                    <input  className='cart-name-topic' type="text" placeholder='Country' required />
                    <input  className='cart-name-topic' type="text" placeholder='Zip Code'  required/>
                </div>
            </div>
        </div>
        <div className="cart-right">
        <CartTotal/>
        <button>PAY</button>
        </div>
    </div>
    </div>
  )
}

export default Checkout