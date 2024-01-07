const shortid=require('shortid')
const Url =require("../models/URL");

const check_duplicates=async(req,res,next)=>{
    let link=req.body.url;
    const main_data=await Url.findOne({redirect_url:link});
    if(main_data)
    { 
        return res.status(200).json({message:"url already present",data:main_data.short_url});
    }
    else
    {
        next();
    }
}



const createShorturl=async(req,res,next)=>{
    let link=req.body.url;
    let si=shortid.generate();
    const newUrl= new Url({
        short_url:si,
        redirect_url:link
    });
    try
    {

        const saved_url= await newUrl.save();
        console.log(saved_url)
        return res.status(200).json({message:"url creation success",data:saved_url.short_url});
    }
    catch(err)
    {
        res.status(400).json({message: err.message})
    }
}

const geturl=async(req,res,next)=>{
    the_id=req.params.id
    try{
        const {redirect_url}=await Url.findOneAndUpdate({short_url:the_id},{$inc:{total_clicks:1}})
        res.redirect(redirect_url)
    }
    catch(err)
    {
        res.status(400).json({message: err.message})
    }
}


const getAnalytics=async(req,res,next)=>{
    the_id=req.params.id
    try{    
        const the_data= await Url.findOne({short_url:the_id})
        return res.status(200).json({message:"data fetched succesful",data:the_data});
    }
    catch(err)
    {
        res.status(400).json({message: err.message})
    }
}
exports.getAnalytics=getAnalytics;
exports.createShorturl=createShorturl;
exports.geturl=geturl;
exports.check_duplicates=check_duplicates;
