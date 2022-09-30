const express=require("express")
const cors=require("cors")
require("dotenv").config({path:"./config/.env"});
const connectDB=require("./config/db.connect.js");

const PORT=process.env.PORT

const app=express()
app.use(express.json(),cors())



app.get("/",(req,res)=>{
    res.send("Welcome")
})



app.listen(PORT, async() => {
    try{
        await connectDB;   
        console.log("connected to db successfully")
    }
    catch{
        console.log("something went wrong while connecting to db")
    }
    console.log(`Server listening on localhost:${PORT}`)
})