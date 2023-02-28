const express = require("express");
const cors = require("cors");
const collection = require("./mongo");

const app = express();
app.use(express.json);
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/", cors(),(req,res)=> {

})

app.post("/", async(req, res) => {
    const {email} = req.body;
    const {pass} = req.body

    const edata = {
        email:email
    }
    const pdata ={
        pass:pass
    }
    await collection.insertMany([edata])
    await collection.insertMany([pdata])
})

app.listen(5000, () => {
    console.log("port connected")
})