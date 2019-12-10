var express = require("express")
var app= express()
var hbs = require("hbs")

app.set("view engine","hbs");

app.get("/", function(req,res){
    res.render("index.hbs",{
        details: [{name:"Ankit Tiwari",mobile:8625924677, email: "ankit.tiwari@mediaagility.com", ID: 601},
        {name: 'Anjali Tiwari',  mobile:8329330379,  email: 'at@gmail.com', ID:602},
        {name: 'Reshabh Nikhal', mobile: 9556565451, email: 'Reshabh.Nikhal@mediaagility.com', ID:603},
        {name: 'Saurabh Saraff',mobile: 8625924678, email: 'saurabh.saraff@mediaagility.com', ID:604},
        {name: 'Ajinkaya',mobile:7874516016, email: 'Ajinkaya@gmail.com', ID:604 }]
    })
})

app.listen(4000)
