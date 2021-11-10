const express = require("express");
const app = express();

const connect = require("./config/dbs");

app.use(express.json());

// app.set("view engine","ejs");

// app.use(express.urlencoded({ extended: false }))

const userMobileNoController = require("./controllers/userMobileNo.controller");
app.use("/", userMobileNoController)

app.get("/mobiledata", (req,res)=>{
    res.render("form")
})

app.listen(3001, async (req, res) => {
    await connect();
    console.log("listening on port: 3001")
})

