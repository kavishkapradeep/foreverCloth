import './SignInSignUp.css'

import React, { useState } from 'react'

const SignInSignUp = ({setShowLogin}) => {
    const [currState,setCurrState]=useState("Sign IN")
  return (
    <div className='logIn'>

         <form onClick={()=>{setShowLogin(true)}} className="login-container">
             <div className="login-title">
                    <h2>{currState}</h2>
                    <p className="login-title-bar"></p>
             </div>
             <div className="login-inputs">
                {currState==="Sign In"?<></>:<input name='name' type="text"  placeholder='Your Name'required/>}
                
                <input name='email' type="email" placeholder='Your Email' required/>
                <input name='password' type="password"  placeholder='Your password' required />
             </div>
                <button>{currState==="Sign Up"?"Create account":"Sign In"}</button>
             <div className="login-condition">
                    <input type='checkbox' required></input>
                    <p>By contuning ,i agree to the terms  of use & privacy policy</p>
             </div>

                {currState==="Sign In"?
                <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:
                <p>Already have an account? <span onClick={()=>setCurrState("Sign In")}>Login here</span></p>

                }
         </form>

    </div>
  )
}

export default SignInSignUp