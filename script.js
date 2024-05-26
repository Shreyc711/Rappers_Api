const express = require('express');
const app = express();
const PORT = 8000;

var rapper = {
    "lil_thunder": {
        name: "Lil Thunder",
        age: 24,
        birthplace: "Atlanta, GA"
    },
    "mc_blaze": {
        name: "MC Blaze",
        age: 30,
        birthplace: "Los Angeles, CA"
    },
    "young_savage": {
        name: "Young Savage",
        age: 27,
        birthplace: "Chicago, IL"
    },
    "dj_heatwave": {
        name: "DJ Heatwave",
        age: 35,
        birthplace: "Houston, TX"
    },
    "king_flow": {
        name: "King Flow",
        age: 22,
        birthplace: "New York, NY"
    },
    "big_freeze": {
        name: "Big Freeze",
        age: 28,
        birthplace: "Detroit, MI"
    },
    "fresh_beats": {
        name: "Fresh Beats",
        age: 26,
        birthplace: "Miami, FL"
    },
    "ace_rhymes": {
        name: "Ace Rhymes",
        age: 31,
        birthplace: "Philadelphia, PA"
    },
    "queen_vibe": {
        name: "Queen Vibe",
        age: 29,
        birthplace: "San Francisco, CA"
    },
    "dr_groove": {
        name: "Dr. Groove",
        age: 33,
        birthplace: "New Orleans, LA"
    },
    "unknown":{
        name:"N/A",
        age:"N/A",
        birthplace:"N/A",
        note:"wrong input data"
    }
};


app.get("/",(req,res)=>{
    res.send("working")
})

app.get("/api",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get('/rapper',(req,res)=>{
    res.json(rapper)
})

app.get('/rapper/:name',(req,res)=>{

    var all = req.params.name.toLowerCase();

    if(rapper[all]){
        res.json(rapper[all])
    }
    else{
        res.json(rapper["unknown"])
    }
    
})

app.listen(PORT)
