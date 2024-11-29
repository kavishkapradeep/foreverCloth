import mongoose from "mongoose";

const clothSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},
    subCategory:{type:String,required:true},
    sizes:{type:String,required:true}
})

const clothModel = mongoose.models.cloth || mongoose.model("cloth",clothSchema)

export default clothModel;