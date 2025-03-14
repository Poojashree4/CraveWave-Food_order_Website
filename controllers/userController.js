import userModel from "../models/userModels.js";
import jwt from "jsonwebtoken" //authenticate user token
import bcrypt from "bcrypt" //hashed password
import validator from "validator" //email validate

//login user
const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user = await userModel.findOne({email});

        if(!user){
            return res. json({success:false,message:"User does not exists"})
        }
        const isMatch= await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({success:false,message:"Invalid credentials"})
        }
        const token=createToken(user._id);
        res.json({success:true,token})

    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})

    }

}
//create token
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const registerUser=async(req,res)=>{
    const {name,password,email} =req.body;
    try{
        const exists=await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message:"User already exists"})
        }
        //validating emailformat & strong pass
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"please enter a valid email"})
        }
        if(password.length<8){
            return res.json({success:false,message:"Please enter strong password"})
        }
        //hashing user password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(password,salt);
        const newUser=new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        //to save user in db
        const user=await newUser.save()
        const token= createToken(user._id)
        res.json({success:true,token})

    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})

    }
}

export {loginUser,registerUser}