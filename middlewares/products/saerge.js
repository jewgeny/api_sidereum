const sargeModel = require("../../models/products/saerge");
//const methodOverride = require("method-override");


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

const deleteSarg = async(req, res) => {
   try{
      //await sargeModel.deleteOne({art_nr: req.body.art_nr});
      await sargeModel.findByIdAndRemove(req.body._id);
      res.status(202).json({msg: "Sarg wurde erfolgreich gelöscht"})
   }
   catch(error){
     console.log(error)
   }
}



const createSaerge = async (req, res) => {

     try{
         await sargeModel.create({
               img: req.body.img,
               titel: req.body.titel,
               price: req.body.price,
               category: req.body.category,
               art_nr: req.body.art_nr
         })
         res.status(202).json({msg: "Sarg wurde erfolgreich hinzugefügt"});

     }
     catch(error){
         console.warn(error);
     }
}

const updateSarg = async (req, res)  => {
     let id = req.params.id;
     try{
         await sargeModel.findOneAndUpdate({_id: id},{ $set: req.body}, {new: true});
         res.status(202).json({msg: "update was successfully"});
     }
     catch(err){
        console.log(err)
     }
}



module.exports = {getSaerge, createSaerge, deleteSarg, updateSarg}