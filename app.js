const express = require("express");
const mongoose = require("mongoose")
const Validator = require("validator")

let app = express();

mongoose.connect("mongodb://0.0.0.0:27017/")
.then(() => console.log("connected successfully"))
.catch((err) => {console.error(err);});

    const userscheama = new mongoose.Schema({
        fname: {
        type :String,
        require :true
        },
        lname: {
            type :String,
            require :true
        },
        email: {
            type :String,
            require :true,
            unique : true
        },
        password: {
            type :String,
            require :true
        },
    });

    let usermodel = mongoose.model("user",userscheama);

    let user1 = new usermodel({
        fname : "ahmed",
        lname :"khaled",
        email :"ahmed12@gmail",
        password : "01556452220"
    }).save();

    let user2 = new usermodel({
        fname : "ali",
        lname :"osama",
        email :"ali13@gmail",
        password : "01556452230"
    }).save();

    let user3 = new usermodel({
        fname : "basel",
        lname :"abdallah",
        email :"basel14@gmail",
        password : "01556452240"
    }).save();

    const animalscheama = new mongoose.Schema({
        name : String,
        kind : String,
        age : Number
    })

    let animalmodel = mongoose.model("animal",animalscheama);

    let animal1 = new animalmodel({
        name : "dog",
        kind : "BEARDED COLLE",
        age : 5
    }).save();

    let animal2 = new animalmodel({
        name : "dog",
        kind : "MALTESE",
        age : 3
    }).save();

    let animal3 = new animalmodel({
        name : "dog",
        kind : "POODLE",
        age : 4
    }).save();

    let animal4 = new animalmodel({
        name : "cat",
        kind : "CHERAZI",
        age : 2
    }).save();

    let animal5 = new animalmodel({
        name : "cat",
        kind : "PERSAIN",
        age : 1
    }).save();

    let animal6 = new animalmodel({
        name : "cat",
        kind : "TURKISH VAN",
        age : 3
    }).save();

    let animal7 = new animalmodel({
        name : "hamster",
        kind : "CAMBELL'S DWARF",
        age : 2
    }).save();

    let animal8 = new animalmodel({
        name : "hamster",
        kind : "ROBOROVSKI",
        age : 2
    }).save();

    let animal9 = new animalmodel({
        name : "hamster",
        kind : "WINTER WHITE",
        age : 2
    }).save();

app.get("/users",async(req,res) => {
    let allusers = await usermodel.find();
    res.status(200);
    res.json(allusers)
})

app.get("/animals",async(req,res) => {
    let allanimals = await animalmodel.find();
    res.status(201);
    res.json(allanimals)
})

    
app.get("/",(req,res)=>{
    res.send("welcome")
})

const loginscheama = new mongoose.Schema({
    email: {
        type :String,
        require :true,
        unique : true
    },
    password: {
        type :String,
        require :true
    },
});

let loginmodel = mongoose.model("login",loginscheama);


app.listen(3000,function(){
    console.log("i am listening at port 3000 now")
})