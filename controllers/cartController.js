import userModel from "../models/userModels.js";

//add items to cart
const addToCart = async(req,res) =>{
    try{
        let userData= await userModel.findById(req.body.userId);// if the user req id is same as the userid then the token give code from middleware and show that users cart details
        let cartData =await userData.cartData;
        if(!cartData[req.body.itemId])
        {
            cartData[req.body.itemId] =1;// if the item is already available then it increase item in cart if not it will add
        }
        else{
            cartData[req.body.itemId] +=1; // it increase the item no
        }
        //update the user cart with new cart data
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true, message:"Added to Cart"});
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

// remove items from user cart
const removeFromCart =async (req,res) =>{
    try{
        let userData =await userModel.findById(req.body.userId);
        let cartData= await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Removed From Cart"})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})

    }

}

//fetch cart data
const getCart= async( req,res)=>{
    try{
        let userData =await userModel.findById(req.body.userId);
        let cartData =await userData.cartData;
        res.json({success:true,cartData})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

export {addToCart,removeFromCart,getCart}