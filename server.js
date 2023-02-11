const mongoose = require("mongoose");
const Hunter = require("./Hunter");
const express = require("express");
const app = express();
const Router = require("./route_controller");

app.use("/", Router);
app.use("/about", Router)

app.listen(3001, ()=>{
    console.log("Now listening on Port: 3001");
})

mongoose.connect("mongodb+srv://voltron:1billy2jimmy@cluster0.mfdgx3d.mongodb.net/hunterXhunter?retryWrites=true&w=majority");



run()

async function run(){
    /*const hunter = await Hunter.create({name:"Leorio", age: 20})
    console.log(hunter);*/
    const hunter = await Hunter.find({})
    console.log(hunter);
}