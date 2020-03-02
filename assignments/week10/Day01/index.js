var express = require('express')
var hbs = require('hbs')
var mongodb = require("mongodb");
var books = require('express')
var bodyParser = require("body-parser")

var app =express()
var url = 'mongodb://localhost:27017';
var dbName = 'attainu';
var DB = "";
mongodb.MongoClient.connect(url,function(err,client){
    if(err){
        console.log(err)
    }
    else{
        DB = client.db(dbName)
    }
})
app.set("view engine", "hbs")
app.use(bodyParser.urlencoded({
    extended:false
}))
app.get("/",function(req,res){
    res.render("index")
})

app.get("/addstudent",function(req,res){
    res.render("addstudent")
})
app.get("/addinstructor",function(req,res){
    res.render("addinstructors")
})

app.get("/students",function(req,res){
    DB.collection("students").find({}).toArray(function(err,result){
        if(err){
            console.log(err)
        }
        else{
            res.render("students",{students:result})
        }
    })
   
})
app.get("/instructors",function(req,res){
DB.collection("instructors").find({}).toArray(function(err,result){
    if(err){
        console.log(err)
    }
    else{
        res.render("instructors",{instructors:result})
    }
})
  
})

app.post("/poststudent",function(req,res){
    var data ={
        name:req.body.name,
        phone:req.body.phone,
        location:req.body.location
    }
    DB.collection("students").insertOne(data,function(err,results){
        if(err){
        console.log(err)
    }
    else{
        res.redirect("/students")
    }
    })
})

app.post("/postinstructor",function(req,res){
    var data={
        name:req.body.name,
        phone:req.body.phone,
        location:req.body.location
    }
    DB.collection("instructors").insertOne(data,function(err,result){
        if(err){
            console.log(err)
        }
        else{
            res.redirect("/instructors")
        }
    })
})
app.listen(9000)