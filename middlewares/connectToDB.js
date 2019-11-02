const mongoose = require("mongoose");
const dotenf = require("dotenv").config();
const url = process.env.MONGO_DB;


const connectToDB = async (req,res) => {
     try{
        console.log("Before connecting to Atlas")
        await mongoose.connect(url, 
        {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Connected to Atlas");
     }
     catch(error){ 
         console.log(error)
     }
}

module.exports = connectToDB;
