const express = require("express");
const app = express();
const vocabroute = require("./routes/index")

app.use("/", vocabroute);

app.listen(3000, ()=>{
    console.log("listening on port 3000")
})