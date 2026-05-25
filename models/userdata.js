const mongoose = require("mongoose"); //importing mongoose
const validator = require("validator"); //importing validator by installing 'npm i validator'

//schema creating.
const userSchema = new mongoose.Schema({  //object creation
    username:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isLowercase(value)){
                return "username must be lowercase";
            }
        }
    },
    email:{
        type:String,
        lowercase:true,
        unique:true,
        trim:true,
        required:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    password:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Please enter strong password");
            }
        }
    }
})

module.exports=mongoose.model("userdata",userSchema); //Exporting code to use