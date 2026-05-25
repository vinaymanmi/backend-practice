const userdata=require("../models/userdata"); //import

const createAccount=async (req,res) => {
    try {
        const {username,email,password}=req.body;

        //Before pushing check email existed or not
        const existEmail=await userdata.findOne({  //finds a email
            email:email
        }) 
        if(existEmail){
            return res.send("Email already existed please login");
        }

        //pushing new account to DB
        const data=await userdata.create(
            {username,email,password}
        );
        res.json({
            message:"Account is created",
            data,
            if(email){

            }
        })
    } catch (error) {
        res.send(error.message);
    }    
}

module.exports={createAccount}