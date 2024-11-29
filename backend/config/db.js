import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose.connect(`mongodb+srv://kavishkapradeep903:Kavishka07@cluster0.tbzv9.mongodb.net/cloth-del`).then(()=>{
        console.log("DB Connected")
        
    });
}