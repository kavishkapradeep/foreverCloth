import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Collection from './pages/Collection/Collection'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import MyOrders from './pages/MyOrders/MyOrders'

function App() {
  

  return (
    <>
    <div className="app">
       <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/myorders' element={<MyOrders/>} />
       </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
