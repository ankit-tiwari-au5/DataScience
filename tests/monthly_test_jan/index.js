require('./models/db');

const express = require('express');
const path = require('path');
const exhbs= require('express-handlebars');
const mongoose = require('mongoose');
const bodyparser=require('body-parser')

const studentController = require('./controllers/studentController');



var app = express();
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());


mongoose.Promise = global.Promise;

app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exhbs({extname:'hbs',defaultLayout:'mainLayout',layoutsDir:__dirname + '/views/layouts/'}));
app.set('view engine','hbs');

app.listen(8999,()=>{
    console.log('Express server started at port :8999');
});


app.use('/',studentController);