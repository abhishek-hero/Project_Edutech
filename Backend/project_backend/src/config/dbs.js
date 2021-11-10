const mongoose = require("mongoose");

const connect = ()=>{
    mongoose.connect("mongodb+srv://abhishek-hero:mahabharat@project-edutech.uyk3o.mongodb.net/project-edutech")
}

module.exports = connect