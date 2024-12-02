import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import Login from './components/login/Login';

function App() {
  
const url ="http://localhost:4000"
const [token,setToken] =useState(``);
  return (
    <div>{token === ""?
      <Login/>:<>
      
      <Navbar/>
      <hr />
      <div className="app-content">
        <ToastContainer/>
        <Routes>
              <Route path='/add' element={<Add url={url}/>}></Route>
              <Route path='/list' element={<List url={url}/>}/>
              <Route path='/orders' element={<Orders url={url}/>}/>
        </Routes>
        
      </div>
      </>
      }
    </div>
  )
}

export default App
