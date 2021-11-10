const router = require("express").Router()
const { body, validationResult } = require('express-validator');
const UserMobileNo = require("../models/userMobileNo.model");

// router.post("/userdata", async(req,res)=>{
//     // const errors = validationResult(req);
//     // if (!errors.isEmpty()) {
//     //   return res.status(400).json({ errors: "Please Enter Valid Number" });
//     // }
    
//     try{
//         let user = await UserMobileNo.create({
//             mobile : req.body.mobile
//             // otp : Math.floor(1000 + Math. random() * 9000)
//         })
//         //  const {otp} = user
//         // return res.send(alert(`Your otp is`,otp))
//         //console.log("user")
//         return res.send("hi")
//     }catch(err){
//         return res.send("err");
//     }
    
// })

router.get("/storedata",async (req,res)=>{
    //check if user is in database or not
    let user = await UserMobileNo.findOne({
        mobile: req.query.mobile
    });
    //if yes
    if(user){
        return res.send(true)
    }
    //if no, create user
    user = await UserMobileNo.create({
        mobile:req.query.mobile,
        otp: Math. floor(1000 + Math. random() * 9000)
    });
    console.log(user)
})

router.get("/usermobilenos", async(req,res)=>{
    let user = await UserMobileNo.find().lean().exec();
    //console.log(user)
    return res.send({user})
})

router.post("/userdata", async(req,res)=>{
    let user = await UserMobileNo.create({
        mobile:req.body.mobile,
        otp: Math. floor(1000 + Math. random() * 9000)
    })
    return res.send({user})
})

router.get("/findmobileno",async (req,res)=>{
    let user = await UserMobileNo.findOne(req.query);
    if(!user)
    return res.send(false);
    else
    return res.send({user})
})

module.exports = router;
