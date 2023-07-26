const express = require("express");
const app = express();
const vocabroute = require("./routes/index")
require("dotenv").config();

app.use("/", vocabroute);

app.listen(process.env.PORT, ()=>{
    console.log("listening on port 3000")
})