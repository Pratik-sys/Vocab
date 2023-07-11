const express = require("express");

const app = express();


app.use("/", (req, res)=>{
    res.send("<h1> Say hello to new app!!<h1>")
})

app.listen(3000, ()=>{
    console.log("listeningon port 3000")
})