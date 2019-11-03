const mongoose = require("mongoose");
const productSaerge = require("../../schemas/products/saerge");

const sargeModel = mongoose.model("products.saerge", productSaerge);

module.exports = sargeModel;