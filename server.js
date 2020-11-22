const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.send("OK");
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));