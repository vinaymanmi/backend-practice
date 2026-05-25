const dns = require('dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);

const express = require("express");
const mongoose = require("mongoose");

//importing api functions
const {createAccount} = require("./controllers/userdata");

require("dotenv").config();
const port = process.env.port;
const mongodb_url = process.env.mongodb_url;

const app = express();

app.use(express.json());

// app.get("/path",(req,res)=>{
//     res.send("API");
// })

app.post("/createAccount",createAccount); //to create new account

mongoose.connect(mongodb_url)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(5000, () => {
            console.log("Server is connected")
        })
    })
    .catch((e) => {
        console.log("ERROR", e);
    })
// console.log("HI");