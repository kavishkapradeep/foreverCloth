import { useContext } from 'react'
import './Verify.css'
import {StoreContext} from '../../context/StoreContext.jsx'
import {useNavigate, useSearchParams} from 'react-router-dom'
import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

const Verify = () => {
    const navigate =useNavigate();

    const {token,setCartItems,backendUrl} =useContext(StoreContext)
    const [searchParams,setSearchParams] =useSearchParams()

    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async ()=>{
            try {
                if (!token) {
                    return null
                }
                const response = await axios.post(backendUrl+'/api/order/verifyStripe',{success,orderId},{headers:{token}})
           
                if (response.data.success) {
                    setCartItems({})
                    navigate('/myorders')
                    toast.success(response.data.message)
                }else{
                    navigate('/cart')
                }
            } catch (error) {
                console.log(error);
                toast.error(error.message)
                
            }
    }

    useEffect(()=>{
        verifyPayment()
    },[token])
  return (
    <div>Verify</div>
  )
}

export default Verify