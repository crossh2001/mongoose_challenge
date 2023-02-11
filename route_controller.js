const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

mongoose.connect("mongodb+srv://voltron:1billy2jimmy@cluster0.mfdgx3d.mongodb.net/hunterXhunter?retryWrites=true&w=majority");


router.get("/", (req, res)=>{
    res.send("Welcome To Hunterpetia!!!");
});

router.get("/about", (req, res)=>{
    res.send("About Our Hunterpetia");
});


module.exports = router;