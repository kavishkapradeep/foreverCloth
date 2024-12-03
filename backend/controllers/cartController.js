import userModel from '../../backend/models/userModule.js'


//add items to user cart 
const addToCart = async (req,res)=>{
    try {
        const {userId,itemId,size} =req.body

        const userData = await userModel.findById(userId)
        let cartData =  await userData.cartData;

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] +=1
            }else{
                cartData[itemId][size] =1
            }
        }else{
            cartData[itemId] ={}
            cartData[itemId][size] =1
        }

        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true,message:"Added to Cart"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }

}

const removeFromCart = async (req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData =await userData.cartData;

        if (cartData[req.body.itemId]>0) {
            cartData[req.body.itemId] -=1;
        }
        await userModel.findByIdAndUpdate(userId,{cartData});
        res.json({success:true,message:"REmoved from Cart"})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

//update user cart
const updateCart = async (req,res)=>{
    try {
        const {userId,itemId,size,quantity} = req.body

        const userData =await userModel.findById(userId)
        let cartData = await userData.cartData;

        cartData[itemId][size] = quantity

        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true,message:"Cart Updated"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

//fetchuser cart Data

const getcart= async (req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData= await userData.cartData;
        res.json({success:true,cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

export {addToCart,removeFromCart,getcart,updateCart}