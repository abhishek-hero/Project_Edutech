const express = require("express")
const { body, validationResult } = require('express-validator');
const User = require('../models/userModel');

const router = express.Router()


// router.post('/', async (req, res) => {
//     const mobile = req.body.mobile

//     // const user = new User({
//     //     mobile
//     // })

//     // user.save()


//     const user = await User.create({
//         mobile
//     })

//     res.status(201).send("created mobile no.")
// })

router.post("/", body("mobile").isLength({ min: 10, max: 10 }).withMessage("Enter valid mobile number"), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: "Please Enter Valid Number" });
    }

    try {

        const userCheck = await User.find()
        const user = await User.create({
            mobile: req.body.mobile,
            otp: Math.floor(1000 + Math.random() * 9000)
        })
        const { otp } = user
        return res.send(alert(`Your otp is`, otp))

    } catch (err) {
        return res.send("err");
    }

})

// router.get("/", async (req, res) => {
//     //check if user is in database or not
//     let user = await User.findOne({
//         mobile: req.query.mobile
//     });
//     //if yes
//     if (user) {
//         return res.send(true)
//     }
//     //if no, create user
//     user = await User.create({
//         mobile: req.query.mobile,
//         otp: Math.floor(1000 + Math.random() * 9000)
//     });
//     console.log(user)
// })

// router.get("/", async (req, res) => {
//     let user = await User.find().lean().exec();
//     //console.log(user)
//     return res.send({ user })
// })

// router.post("/", async (req, res) => {
//     let user = await User.create({
//         mobile: req.body.mobile,
//         otp: Math.floor(1000 + Math.random() * 9000)
//     })
//     return res.send({ user })
// })

// router.get("/findmobileno", async (req, res) => {
//     let user = await User.findOne(req.query);
//     if (!user)
//         return res.send(false);
//     else
//         return res.send({ user })
// })

module.exports = router;
