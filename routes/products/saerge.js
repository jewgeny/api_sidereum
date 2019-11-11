const {getSaerge, createSaerge, deleteSarg} = require("../../middlewares/products/saerge");
const express = require("express");
const saergeRouter = express.Router();

saergeRouter.get("/getData", getSaerge);
saergeRouter.post("/create", createSaerge);
saergeRouter.delete("/delete", deleteSarg);

module.exports = saergeRouter;