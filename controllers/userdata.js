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

const loginAccount = async (req,res) => {
    try {
        const {username,password}=req.body; //login by username and password
        const user = await userdata.findOne({username});
        if(!user){
            return res.send("User not found");
        }
        if(user.password !== password){
            return res.send("invalid password");
        }
        res.json({
            message:"login successfully",
            user:{
                username:user.username,
                email:user.email
            }
        });
    } catch (e) {
        res.send("Error",e.message);
    }
}

module.exports={createAccount,loginAccount}