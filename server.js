const express = require("express");
const connectDB = require("./config/db");

const app = express();
//connect to database
connectDB();

//INIT middleware

app.use(express.json({extended: false}));

app.get("/", function(req,res){
    res.send("OK");
})

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));