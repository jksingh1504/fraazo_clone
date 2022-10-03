const express=require("express")
const cors=require("cors")
require("dotenv").config({path:"./config/.env"});
const connectDB=require("./config/db.connect.js");
const products=require("./models/products.model")

const PORT=process.env.PORT

const app=express()
app.use(express.json(),cors())



app.get("/fruits/:category",async (req,res)=>{
    // console.log(req.params)
    try{
    const {category}=req.params
    const data=await products.find({type:"fruits",category})
    res.send(data)
    }
    catch(err){
        res.send("bad request")
    }
})

app.get("/vegetables/:category", async (req,res)=>{
    try{
        const {category}=req.params
        const data=await products.find({type:"vegetables",category})
        res.send(data)
        }
        catch(err){
            res.send("bad request")
        }
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