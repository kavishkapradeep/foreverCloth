import orderModel from "../models/orderModel.js";
import userModel from '../models/userModule.js'



//placing orders using COD METHOD

const placeOrder = async (req,res)=>{
   

    try {
        const {userId,items,amount,address} =req.body;

        const orderData ={
            userId,
            items,
            amount,
            address,
            paymentMethod:"COD",
            payment:false,
            
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success:true,message:"Order Placed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//placing orders using stripe Method

const placeOrderStripe = async (req,res)=>{
    
}
//placing orders using Razorpay Method
const placeOrderRazorpay = async (req,res) =>{

}

//all orders data for admin panel
const allOrders = async (req,res)=>{
    try {
        const orders = await orderModel.find({})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}
//user orders for frontend

const userOrders = async (req,res)=>{
    try {
        const {userId} =req.body;
        const orders = await orderModel.find({userId});
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//update order status from Admin pannel
const updateStatus = async (req,res) =>{
    try {
        const {orderId,status} = req.body

        await orderModel.findByIdAndUpdate(orderId,{status})

        res.json({success:true,message:'Status Updated'})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}
export {placeOrder,userOrders,placeOrderRazorpay,placeOrderStripe,allOrders,updateStatus}