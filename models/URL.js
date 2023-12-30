const mongoose =require("mongoose");

const Schema=mongoose.Schema;

const url= new Schema({
    short_url:{
        type:String,
        require:true,
        unique:true
    },
    redirect_url:{
        type:String,
        required:true
    },
    total_clicks:{
        type:Number,
        default:0
    }
})

module.exports=mongoose.model('Url',url);