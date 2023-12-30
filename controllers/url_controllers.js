
const Url =require("../models/URL");

const createShorturl=async(req,res,next)=>{
    const url=req.body.url;
    try
    {
        console.log(url);
        return res.status(200).json({message:"url creation success"});
    }
    catch(err)
    {
        res.status(400).json({message: err.message})
    }
}

exports.createShorturl=createShorturl;