const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/register-login")
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log("failed");
})

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    pass:{
        type:String,
        required: true
    }
})

const collection=mongoose.model("collection", newSchema)
module.exports= collection