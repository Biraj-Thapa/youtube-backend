import mongoose from "mongoose"

const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI).then(()=>{
            console.log("connect to db youtube")
        })


    }catch(err){
        throw new Error(err.message)
    }
}



export default connectDB
