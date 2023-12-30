const express=require("express");

const mongoose = require("mongoose");

const app=express();
const router=require('./routes')
PORT=8080

app.use(express.json());
app.use("/",router);
app.listen(PORT,()=>{
    console.log("scaning at port 8080")
})

