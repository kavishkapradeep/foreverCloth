import orderModel from "../models/orderModel.js";
import userModel from '../models/userModule.js'
import Strip from 'stripe'

//global varibles
const currency = 'INR'
const deliveryCharge = 10
//gateway initialize
const stripe = new Strip(process.env.STRIPE_SECRET_KEY)


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

    try {
        const {userId,items,amount,address} =req.body;
        const {origin} =req.headers;
    
        const orderData ={
            userId,
            items,
            amount,
            address,
            paymentMethod:"Stripe",
            payment:false,
            
            
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()
    
        const line_items = items.map((item)=>({
            price_data:{
                currency :currency,
                product_data:{
                        name:item.name
                },
                unit_amount:item.price *100 //currency convert
            },
            quantity: item.quantity
        }))  

        line_items.push({
            price_data:{
                currency :currency,
                product_data:{
                        name:'Delivery Charges'
                },
                unit_amount:deliveryCharge *100 //currency convert
            },
            quantity: 1     
        })

        const session = await stripe.checkout.sessions.create({
            success_url:`${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode:'payment'
        })

        res.json({success:true,session_url:session.url})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//verify Stripe 
const verifyStripe = async (req,res)=>{
    const {orderId,success,userId} =req.body

    try {
        if (success==='true') {
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            await  userModel.findByIdAndUpdate(userId,{cartData:{}})
            res.json({success:true});
        } else {
            await orderModel.findByIdAndDelete(orderId)
            res.json({success:false})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
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
export {verifyStripe,placeOrder,userOrders,placeOrderRazorpay,placeOrderStripe,allOrders,updateStatus}