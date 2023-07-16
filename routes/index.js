const express = require("express");
const { getDictRecords } = require("../utils");

const router = express.Router();

router.get("/",async (req, res) => {
  var records = await getDictRecords();
  
  if (typeof(records) == undefined){
    return res.status(500).json({
      Msg: "Something went wrong, pleae reload"
    })
  }
  // console.log((records[0].meanings[1].definitions).length)
  // console.log(records[0])
  var dictRecords = {
    "Word" : records[0].word,
    "Meaning": records[0].meanings[0].definitions[0].definition,
    "Synonyms": records[0].meanings[0].synonyms
  } 
  return res.status(200).json({
    result : dictRecords ,
  });
});

module.exports = router;
