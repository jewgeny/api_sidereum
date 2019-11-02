const express = require("express");
const nodemon = require("nodemon");
const app = express();
//const port = 4000;
const dotenf = require("dotenv").config();
const port = process.env.PORT || 4000;
const connectToDB = require("./middlewares/connectToDB");
const saergeRouter = require("./routes/products/saerge");
var path = require('path');

app.get('/', function(req, res) {
     res.sendFile(path.join(__dirname + '/index.html'));
 });






app.use("/saerge", saergeRouter);

connectToDB();
app.listen(port, () => {
     console.log(`The server is listining in port ${port}`);
})

