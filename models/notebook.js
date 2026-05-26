const mongoose = require("mongoose");

const notebookSchema = mongoose.Schema({
    title:{
        type:String,
        uppercase:true,
        required:true
    },
    notes:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("notebook",notebookSchema);