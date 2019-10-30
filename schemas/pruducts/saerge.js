const mongoose = require("mongoose");

const productSaerge = new mongoose.Schema({
    img: {type: String, required: false},
    titel: {type: String, required: true},
    price: {type: String, required: true},
    category: {type: String, required: true}
}, {versionKey: false})

module.exports = productSaerge;