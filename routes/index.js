const express = require("express");
const { getDictRecords } = require("../utils");
const router = express.Router();

router.get("/", async (req, res) => {
  var records = await getDictRecords();
  if (typeof records == undefined) {
    return res.status(500).json({
      Msg: "Something went wrong, pleae reload",
    });
  }
  var trimdefiniton = {};
  var trimSynonyms = records.meanings.map(({ synonyms }) => synonyms);
  var recordElem = records.meanings.map((ele) => {
    var defn = ele.definitions.map(({ definition }) => definition);
    if (ele.partOfSpeech in trimdefiniton) {
      trimdefiniton[ele.partOfSpeech].push(`${defn}`);
    } else {
      trimdefiniton[ele.partOfSpeech] = defn;
    }
    return [`${ele.partOfSpeech} : ${defn}`];
  });
  var dictRecords = {
    Word: records.word,
    Meaning: trimdefiniton,
    Synonyms: trimSynonyms,
  };
  res.render("index", { records: dictRecords });
});

module.exports = router;
