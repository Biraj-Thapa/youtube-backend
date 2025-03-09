import express from "express"
const router=express.Router()

router.get("/signup",(req,res)=>{
    res.send("i am don")
})


export default router