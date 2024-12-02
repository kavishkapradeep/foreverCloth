import './Login.css'

import React, { useState } from 'react'

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onSubmitHandler = async (e)=>{
        try {
            e.preventDefault();
            console.log(email,password);
            
        } catch (error) {
            
        }
    }

  return (
    <div className='admin_container'>
        <div className='admin'>
            <h1>Admin Panel</h1>

            <form onSubmit={onSubmitHandler} >
                <div className="flex col">
                    <p>Email Address</p>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className='email' type="email" placeholder='Your@gmail.com' required />
                </div>
                <div className="flex-col">
                    <p>Password</p>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} className='password' type="password" placeholder='Enter your password' required />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login