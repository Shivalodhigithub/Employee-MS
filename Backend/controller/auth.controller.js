/**
 * need to write logic controller here
 */

const adminModel=require('../model/admin.model')
const jwt=require('jsonwebtoken')
const sec_key=require('../config/seckey.config')

exports.signIn=async(req,res)=>{
    try {
        // 1.read the req body 
        const user1 = req.body;
        console.log(user1)


        // 2.insert the data into data base 
        const Email = await adminModel.findOne({email:req.body.email})
        if(!Email) {
            return res.status(400).json({loginStatus:false,Error:'User does not exist'})
           
        }

        // generate token  
        const gentoken=jwt.sign({role:'admin',email:Email},sec_key.sec_key,{expiresIn:'1hr'})
        res.cookie('token' , gentoken)
        // console.log(gentoken); 

        //3.return response
        return res.status(200).json({loginStatus:true })
        
    } catch (error) {
        console.log(" Intel Error while SignIn",error) 

        
    }
}

