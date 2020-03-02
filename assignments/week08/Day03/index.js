var express = require('express');
var bp = require('body-parser');
var PORT = 5000;
var app = express();
app.use(bp({urlencoded:true}));
app.post('/add', function(req , res){
    var result = req.body;
    console.log(result)
    result["result"] =result.number1 + result.number2;
    res.send(result);
})

app.post('/sub', function(req , res){
    var result = req.body;
    result["result"] =result.number1 - result.number2;
    res.send(result);
})

app.post('/mul', function(req , res){
    var result = req.body;
    result["result"] =result.number1 * result.number2;
    res.send(result);
})

app.post('/div', function(req , res){
    var result = req.body;
    result["result"] =result.number1 / result.number2;
    res.send(result);
})

app.listen(PORT, function(err){
    if(err) console.log(err)
    else console.log("Server is running at ->", PORT);
})