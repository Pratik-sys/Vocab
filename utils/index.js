const fs = require("fs");
const axios = require("axios");

exports.FetchRandomWord = () => {
  try {
    const fileData = fs.readFileSync("./utils/english.txt", "utf-8");
    const splitwords = fileData.split("\n");
    var getrandomnum = Math.floor(Math.random() * splitwords.length) + 1;
    const res = splitwords[getrandomnum];
    return res;
  } catch(error) {
    console.log(error)
  }
}

exports.getDictRecords = async () => {
  try {
    const word = this.FetchRandomWord()
    const result = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${this.FetchRandomWord()}`
   );
   return result.data[0];
  } catch(error) {
    console.log(error);
  }
};


