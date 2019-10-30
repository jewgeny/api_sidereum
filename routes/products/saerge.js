const {getSaerge, createSaerge} = require("../../middlewares/products/saerge");
const express = require("express");
const saergeRouter = express.Router();

saergeRouter.get("/get", getSaerge);
saergeRouter.post("/create", createSaerge);

module.exports = saergeRouter;