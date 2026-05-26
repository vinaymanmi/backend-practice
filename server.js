const dns = require('dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);

const express = require("express");
const mongoose = require("mongoose");

//importing api functions from userdata.js
const {createAccount,loginAccount} = require("./controllers/userdata");

const {createNotebook,retrieveNotebook,updateNotebook} = require("./controllers/notebook")

require("dotenv").config();
const port = process.env.port;
const mongodb_url = process.env.mongodb_url;

const app = express();

app.use(express.json());

// app.get("/path",(req,res)=>{
//     res.send("API");
// })

app.post("/create-account",createAccount); //to create new account
app.post("/login",loginAccount);

app.post("/create-notebook",createNotebook)
app.get("/retrieve-notebook",retrieveNotebook)
app.put("/update-notebook",updateNotebook)

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