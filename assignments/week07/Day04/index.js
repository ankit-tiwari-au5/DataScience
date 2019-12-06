var express = require("express")
var app = express()

app.get('/add/:num1/:num2',function(req,res){
    res.send('ans:'+(parseInt(req.params.num1)+parseInt(req.params.num2)))
})
app.get('/sub/:num1/:num2',function(req,res){
    res.send('ans:'+(parseInt(req.params.num1)-parseInt(req.params.num2)))
})
app.get('/mul/:num1/:num2',function(req,res){
    res.send('ans:'+(parseInt(req.params.num1)*parseInt(req.params.num2)))
})
app.get('/div/:num1/:num2',function(req,res){
    res.send('ans:'+(parseInt(req.params.num1)/parseInt(req.params.num2)))
})
app.listen(2000)