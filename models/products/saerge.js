const mongoose = require("mongoose");
const productSaerge = require("../../schemas/pruducts/saerge");

const sargeModel = mongoose.model("saerge", productSaerge);

module.exports = sargeModel;