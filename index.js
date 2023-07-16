const express = require("express");
const app = express();
const vocabroute = require("./routes/index")
const path = require('path');

app.engine('ejs', require('ejs').renderFile);
app.set("view engine", "ejs");

app.set('views', path.join(__dirname, 'views'));

app.use("/", vocabroute);

app.listen(3000, ()=>{
    console.log("listening on port 3000")
})