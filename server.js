const express = require("express");
const app = express();
//const port = 4000;
const dotenf = require("dotenv").config();
const port = process.env.PORT || 4000;
const connectToDB = require("./middlewares/connectToDB");
const saergeRouter = require("./routes/products/saerge");
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


// Body parser middleware
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({extended: true, limit: '50mb' }));

app.get('/', function(req, res) {
     res.sendFile(path.join(__dirname + '/index.html'));
 });


app.use("/saerge", saergeRouter);

connectToDB();
app.listen(port, () => {
     console.log(`The server is listining in port ${port}`);
})

