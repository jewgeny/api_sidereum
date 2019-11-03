const sargeModel = require("../../models/products/saerge");


const getSaerge = async (req, res) => {
  try{
    const findAllSaerge = await sargeModel.find();
    res.status(202).json(findAllSaerge);
    console.log("find all särge", findAllSaerge)
    dbProducts = "saerges";
  }
  catch(error){
      console.warn(error)
  }  
}

const createSaerge = async (req, res) => {
     try{
         await sargeModel.create({
               img: req.body.img,
               titel: req.body.titel,
               price: req.body.price,
               category: req.body.category
         })
         res.status(202).json({msg: "Sarg wurde erfolgreich hinzugefügt"});

     }
     catch(error){
         console.warn(error);
     }
}



module.exports = {getSaerge, createSaerge}