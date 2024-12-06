import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Collection from './pages/Collection/Collection'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import MyOrders from './pages/MyOrders/MyOrders'
import SignInSignUp from './components/SignINSignUp/SignInSignUp'
import Product from './pages/Product/Product'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; 
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Verify from './pages/Verify/Verify'

function App() {
  
  

  return (
    <>
    
    <div className="app">
      <ToastContainer/>
       <Navbar />
       <Routes>
        <Route path='/login' element={<SignInSignUp/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/myorders' element={<MyOrders/>} />
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/verify' element={<Verify/>}></Route>
       </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
