const express = require("express");
const { getDictRecords, FetchRandomWord } = require("../utils");
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
      return res.status(200).json({
        dictRecords,
      });
    } else {
      return res.status(401).json({
        Msg: "Something bad happened",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/newword", (req, res) => {
  try {
    const NewWord = FetchRandomWord();
    return res.status(200).json({ word : NewWord.trim()});
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
