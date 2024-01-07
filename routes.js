const express=require("express");
const {createShorturl,geturl,check_duplicates,getAnalytics}=require("./controllers/url_controllers");
const router = express.Router();


router.post("/createUrl",check_duplicates,createShorturl);
router.get("/:id",geturl)
router.get("/analytics/:id",getAnalytics)

module.exports =router;