var express = require('express')
var hbs = require('hbs')
var multiparty = require('multiparty')
var cloudinary = require('cloudinary').v2
var bodyParser = require('body-parser')

var app = express()
cloudinary.config({
    cloud_name: "dnilcfbs7",
    api_key: "877563161429122",
    api_secret: "gFUB6sm-PqKIGpPYyo1WJJe-cAs"
})

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(express.static('public'))
app.use(express.static('uploads'))
app.set('view engine', 'hbs')

var cricketPlayers = [];
app.post('/cricketPlayer', function(req, res) {
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        cloudinary.uploader.upload(files.image[0].path, function(error, result) {
            fields = {
                name: fields.name[0],
                age: fields.age[0],
                image: result.url,
                filename: files.image[0].originalFilename
            }
            console.log(fields)
            cricketPlayers.push(fields);
            res.redirect('/');
        });
    })
})
app.get('/', function(req, res) {
    var full = cricketPlayers.length < 12
    res.render('index.hbs', {
        cricketPlayers: cricketPlayers,
        full: full
    })
})

app.listen(3000)
