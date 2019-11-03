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

const allowedOrigins = [
     'capacitor://localhost',
     'ionic://localhost',
     'http://localhost',
     'http://localhost:8080',
     'http://localhost:8100',
     'https://sidereumapi2.herokuapp.com'
   ];
   
   // Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
   const corsOptions = {
     origin: (origin, callback) => {
       if (allowedOrigins.includes(origin) || !origin) {
         callback(null, true);
       } else {
         callback(new Error('Origin not allowed by CORS'));
       }
     }
   }
   
   // Enable preflight requests for all routes
   app.options('*', cors(corsOptions));
   
   app.get('/', cors(corsOptions), (req, res, next) => {
     res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
   })

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
     res.sendFile(path.join(__dirname + '/index.html'));
 });



app.use("/saerge", saergeRouter);

connectToDB();
app.listen(port, () => {
     console.log(`The server is listining in port ${port}`);
})

