const mongoose = require("mongoose");
const productSaerge = require("../../schemas/products/saerge");

const sargeModel = mongoose.model("saerges", productSaerge);

module.exports = sargeModel;