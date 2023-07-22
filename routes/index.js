const express = require("express");
const { getDictRecords } = require("../utils");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const records = await getDictRecords();
    if (records[0] != 404) {
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
      return res.render("index", { records: dictRecords });
      // return res.status(200).json({
      //   dictRecords
      // })
    } else {
      return res.render("index", { records: records })   
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
