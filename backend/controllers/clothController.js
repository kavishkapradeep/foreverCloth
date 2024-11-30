import clothModel from "../models/clothModule.js";
import fs from 'fs'



//add cloth item

const addCloth = async (req,res)=>{
    let image_filename =`${req.file.filename}`;

    let sizes = [];
    let dates = Date.now();
    if (typeof req.body.sizes === "string") {
        sizes = req.body.sizes.split(',').map(size => size.trim());
    } 
    // Check if sizes are passed as an array
    else if (Array.isArray(req.body.sizes)) {
        sizes = req.body.sizes.map(size => size.trim());
    }
    const cloth = new clothModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        subCategory:req.body.subCategory,
        image:image_filename,
        sizes:sizes,
        date:dates
    })

    try {
        await cloth.save();
        res.json({success:true,message:"Cloth Added"})
    } catch (error) {
        console.log(error);
        res.json({sucess:false,message:"Error"})
        
    }

}

//all cloth listStyle
const listCloth =async(req,res)=>{
    try {
        const cloths = await clothModel.find({});
        res.json({success:true,data:cloths})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//remove  cloth item 
const removeCloth = async (req,res)=>{
   try {
        const cloth = await clothModel.findById(req.body.id)
        fs.unlink(`upload/${cloth.image}`,()=>{})

        await clothModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
   } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
   } 
}
//update colth 

const updateCloth = async (req,res)=>{
    

    const {id,name,description,category,subCategory,sizes,price}=req.body;
    let  image_filename;

    if (req.file) {
        image_filename=`${req.file.filename}`
    }

    try {

        //Find the existing clothing item
        const cloth = await clothModel.findById(id);
        if (!cloth) {
            return res.json({success:false,message:"Clothing item not found"})
        }
        

        const updateCloth = await clothModel.findByIdAndUpdate(
            id,{
                name,
                description,
                category,
                subCategory,
                sizes,price,dates,
                ...(image_filename && {image:image_filename}),
            },
            {new:true}
        );

        if (!updateCloth) {
            return res.json({success:false,message:"Clothe items not found"})
        }
        if (image_filename &&cloth.image) {
            fs.unlink(`upload/${cloth.image}`,()=>{})
        }
            
        res.json({success:true,message:"Cloth Updated",data:updateCloth})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error updating Cloth Item"})
    }

}


export {addCloth,listCloth,removeCloth,updateCloth}