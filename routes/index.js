const express = require("express");
const { FetchRandomWord } = require("../utils");

const router = express.Router();

router.get("/",(req, res) => {
  r = FetchRandomWord();
  return res.status(200).json({
    word: r,
  });
});

module.exports = router;
