var express = require("express")
var app = express()
var session = require("express-session")
var bodyParser= require("body-parser")
var books= require("./json/book.json")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.set("view engine", "hbs")
app.use(session({
    secret: "newSessReq",
    cookie: {
        maxAge: 1000 * 10,
        path: "/",
        httpOnly: true
    }
}))
var userAuth = [{
        name: "Ankit",
        password: "123456"
    },
    {
        name: "Aditi",
        password: "567892"
    },
    {
        name: "Dev",
        password: "555555"
    },
    {
        name: "Neha",
        password: "666666"
    },
]
app.post("/user", function(req, res) {
    var count
    for (i = 0; i < userAuth.length; i++) {
        if (userAuth[i].name == req.body.name && userAuth[i].password == req.body.password) {
            count = 1
            break;
        }

    }

    if (count == 1) {
        req.session.person = {
            name: req.body.name,
        }
        res.redirect("/library")
    } else {
        res.redirect("/")
    }

})
app.get("/", function(req, res) {
    res.render("index")
})
app.use(function(req, res, next) {
    if (req.session.person) {
        next();
    } else {
        res.redirect("/")
    }
})

app.get("/library", function(req, res) {
    res.render("library",{
        books:books
    })

})
app.post("/search", (req, res) => {
    var lang = req.body.language.toLowerCase()
    books = books.filter(book => {
        return book.language.toLowerCase() === lang
    })
    res.redirect("/library")
})


app.listen(5000)