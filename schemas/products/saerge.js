const mongoose = require("mongoose");

const productSaerge = new mongoose.Schema({
    img: {type: String, required: false},
    titel: {type: String, required: false},
    price: {type: String, required: false},
    category: {type: String, required: false},
    art_nr: {type: String, required: false},
   
}, {versionKey: false})

module.exports = productSaerge;