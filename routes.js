const express=require("express");
const {createShorturl}=require("./controllers/url_controllers");
const router = express.Router();


router.post("/createUrl",createShorturl);

module.exports =router;