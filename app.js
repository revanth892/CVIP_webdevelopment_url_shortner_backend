const express=require("express");

const mongoose = require("mongoose");

const app=express();
const router=require('./routes')
PORT=8080
const mongowebsite="mongodb+srv://revanth9347569169:OZ9ss623R8eF03la@cluster0.dy9fjpo.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());
app.use("/",router);
app.listen(PORT,()=>{
    console.log("scaning at port 8080")
})

mongoose.connect(mongowebsite)
.then(()=>{
    console.log("the database is connected");
})
.catch(err=>{
    console.log(err);
})