const notebook = require("../models/notebook");

const createNotebook = async (req,res) => { //creates a notebook
    try {
        const {title,notes} = req.body;
        const sendData = await notebook.create({title,notes})//just stores notebook data,not prints the data
        res.json({
            message:"Notebook created📝✅",
            sendData
        })
    } catch (error) {
        res.send(error.message);
    }
}

const retrieveNotebook=async (req,res) => {
    try {
        const allNotes=await notebook.find();
        res.json({
            allNotes
        })
    } catch (error) {
        res.send(error.message)
    }
}

const updateNotebook=async (req,res) => {
    try {
        const id = req.params.id;
        const {name,title,notes} = req.body;
        const updateNotes=await notebook.findByIdAndUpdate(
            id,
            {name, title, notes},
            {new:true}
        )
        if(!updateNotes){
            return res.send("Notes is not found 📝❌");
        }
        res.json({
            message:"Notes updated 📝✅",
            updateNotebook
        })
    } catch (error) {
        res.send(error.message);
    }
}

module.exports={createNotebook,retrieveNotebook,updateNotebook}