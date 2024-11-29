import express from "express"
import { addCloth, listCloth, removeCloth, updateCloth } from "../controllers/clothController.js"
import multer from "multer"



const clothRouter= express.Router();

//image storage 
const storage = multer.diskStorage({
    destination:"upload",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload =multer({storage:storage})

clothRouter.post("/add",upload.single("image"),addCloth)
clothRouter.get('/list',listCloth)
clothRouter.post('/remove',removeCloth)
clothRouter.post('/update',upload.single("image"),updateCloth)

export default clothRouter;