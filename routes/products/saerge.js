const {getSaerge, createSaerge, deleteSarg, updateSarg} = require("../../middlewares/products/saerge");
const express = require("express");
const saergeRouter = express.Router();

saergeRouter.get("/getData", getSaerge);
saergeRouter.post("/create", createSaerge);
saergeRouter.delete("/delete", deleteSarg);
saergeRouter.put("/update/:id", updateSarg);

module.exports = saergeRouter;