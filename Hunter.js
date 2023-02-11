const mongoose = require("mongoose");

const HunterSchema= mongoose.Schema({
    name: String,
    age: Number
})

module.exports = mongoose.model("Hunter", HunterSchema);

