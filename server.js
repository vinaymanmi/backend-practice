
const express=require("express");
const mongoose=require("mongoose");

const app=express();

require("dotenv").config();
const port=process.env.port;
const mongodb_url=process.env.mongodb_url;


mongoose.connect(mongodb_url)
.then(()=>{
    console.log("MongoDB connected");
    app.listen(port,()=>{
        console.log("Server is connected")
    })
})
.catch((e)=>{
    console.log("ERROR",e);
})
console.log("HI");