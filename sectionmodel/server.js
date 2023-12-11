const express = require('express');
const mongoose = require('mongoose');


let app = express();
app.use(express.json());

//connect server to mongo server ==> local db 
mongoose.connect("mongodb://localhost:27017/")
.then((success) => app.listen(3000))
.catch((err) => console.log(err.message));