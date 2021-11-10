const mongoose = require("mongoose");

const userMobileNoSchema = new mongoose.Schema({
    mobile: {type: String, required: true },
    otp: { type: Number, required: false },
    my_projects:[{type:String,required:false}],
    bought_courses:[{type:String,required:false}],
    my_subscriptions: [{type:String,required:false}],
    my_payments:[{type:String,required:false}],
    ongoing_courses:[{type:String,required:false}],
    upcoming_courses:[{type:String,required:false}],
    completed_courses:[{type:String,required:false}],
    course_journey:[{type:Number,required:false}]
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("userMobileNo", userMobileNoSchema);
