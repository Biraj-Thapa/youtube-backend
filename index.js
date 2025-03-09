import express from "express"
import 'dotenv/config'
import connectDB from "./db/connection.js"
import userRouter from "./routes/user.js"

const app=express()
connectDB()
const PORT=process.env.PORT

app.use("/api/user",userRouter)


app.listen(PORT,()=>{
console.log(`listening on ${PORT}`)
})