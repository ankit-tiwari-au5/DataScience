var express = require("express")
var app = express()
var array = []

app.get('/create/:name/:mobileNo',function(req,res){
    array.push({name:req.params.name,mobileNo:req.params.mobileNo})
    res.send(array)
})

app.get('/add/:num/:name/:mobileNo',function(req,res){
    array.splice((req.params.num), 0, {name:req.params.name, mobileNo:req.params.mobileNo})
    res.send(array)
})

app.get('/update/:num/:name/:mobileNo',function(req,res){
    array[req.params.num].name=req.params.name
    array[req.params.num].mobileNo=req.params.mobileNo
    res.send(array)
})

app.get('/delete/:num/:name/:deleteNumber',function(req,res){
    array.splice((req.params.num),(req.params.deleteNumber))
    res.send(array)
})


app.listen(3000)