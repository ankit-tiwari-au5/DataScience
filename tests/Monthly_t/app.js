var express = require("express");
var bodyParser = require("body-parser");
var hbs = require("hbs");
var app = express();
var multiparty = require('multiparty');
const mongodb = require('mongodb');
const session = require('express-session');

app.set("view engine", "hbs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    secret: "654654161iyguyvhb"
}));

var url = 'mongodb://localhost:27017';
var dbName = 'flipkartnew';
var DB

mongodb.MongoClient.connect(url, function (err, client) {
    if (err) {
        console.log("Error while connecting to database", err);
    }
    else {

        DB = client.db(dbName);

    }
});

app.get("/", function (req, res) {
    if (req.session.user)
        res.redirect("/home");
    else
        res.redirect("/login");
});

app.get("/getusers", function (req, res) {
    res.send({
        users: users
    })
});

app.get("/signup", function (req, res) {

    res.render("signup", {
        mismatch: req.query.mismatch,
        fmatch: req.query.fmatch,
        pmatch: req.query.pmatch,
        ematch: req.query.ematch,
        lmatch: req.query.lmatch



    });
});

app.get("/login", function (req, res) {
    res.render("login", {
        invalid: req.query.invalid

    });
});

app.get("/home", function (req, res) {
    if (req.session.user) {
        DB.collection("posts").find({}).toArray(function (err, posts) {
            if (!err) {
                console.log(posts)
                var deals = posts.filter(el => el.deal)
                var top = posts.filter(el => el.top)
                res.render("index", { _id: req.session.user._id, deals: deals, top: top });
            }
        });


    }
    else
        res.redirect("login");
});

app.get("/logout", function (req, res) {
    req.session.destroy();
    res.redirect("/");
});

app.post("/login", function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    console.log(req.body)
    DB.collection("users").findOne({ "email": email }, function (err, user) {
        if (!err) {
            console.log(user)
            if (user.password !== password || user.password == "" || user.email == "")
                res.redirect("/login?invalid=1");
            else {
                req.session.user = user;
                res.redirect("/home");
            }

        }
    })
})

app.post("/signup", function (req, res) {

    function validatefName(fname) {
        var nameCheck = /^[a-zA-Z\s\.]+$/
        return nameCheck.test(fname)
    }

    function validatelName(lname) {
        var nameCheck = /^[a-zA-Z\s\.]+$/
        return nameCheck.test(lname)
    }


    function validatePhone(phone) {
        var checkPhone = /^0?[\d]{10}$/
        if (!phone)
            return checkPhone.test(phone)
    }
    function validateEmail(email) {
        var checkEmail = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i
        return checkEmail.test(email)
    }


    if ((validatePhone(req.body.phone))) {

        res.redirect("/signup?pmatch=true")
    }
    else if (!validatefName(req.body.fname)) {

        res.redirect("/signup?fmatch=true")
    }

    else if (!validatelName(req.body.lname)) {

        res.redirect("/signup?lmatch=true")
    }

    else if (!validateEmail(req.body.email)) {

        res.redirect("/signup?ematch=true")
    }

    else if (req.body.password !== req.body.confirm_password) {

        res.redirect("/signup?mismatch=true")
    }
    else {
        var user = {
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone
        }


        DB.collection("users").insertOne(user, function (err, result) {
            res.redirect("/login");
        });
    }
});

app.get("/edit", function (req, res) {
    if (!req.session.user)
        res.redirect("/login")
    else {
        var _id = mongodb.ObjectID(req.query.id)
        DB.collection("users").findOne({ _id: _id }, function (err, result) {
            res.render("edit", {
                data: result
            });
        })
    }
});

app.post("/update", function (req, res) {
    var postId = mongodb.Object(req.body.id);
    var data = {
        fname: req.body.fname,
        lname: req.body.lname,
        phone: req.body.phone
    }
    DB.collection("users").updateOne({
        _id: postId
    }, { $set: data }, function (err, result) {
        res.redirect("/edit?id=" + req.body.id);
    })
});

app.get("/add", function (req, res) {

    res.render("add");
});

app.post("/add", function (req, res) {
     if (!req.session.user)
         res.redirect("/login");
     else {
        var form = new multiparty.Form({
            uploadDir: "public/uploads"
        })
        form.parse(req, (err, fields,files) => {
            console.log(fields)
            var product = {

                "category": fields.category[0],
                "product": fields.product[0],
                "description": fields.description[0],
                "highlight": fields.highlight[0],
                "price": fields.price[0],
                "discount": fields.discount[0],
                "image":files.image[0].path.split("\\")[2]
            }
            if (fields.deal) {
                product.deal = true
            }
            else if (fields.top) {

                product.top = true

            }
            DB.collection("posts").insert(product, (err, result) => {
                res.redirect("/home")
            })
        })
   }
})

app.get("/product", function (req, res) {
    if (!req.session.user)
        res.redirect("/login");
    else {
        var id = mongodb.ObjectID(req.query.id)
        DB.collection("posts").findOne({ _id: id }, function (err, result) {
            if (!err) {
                console.log(result)
                res.render("product", { result: result })
            }
        })
    }
})

app.get("/top", function (req, res) {
    if (req.session.user) {
        DB.collection("posts").find({}).toArray(function (err, posts) {
            if (!err) {
                console.log(posts)
                var deals = posts.filter(deal)
                var top = posts.filter(top)
                res.render("top", { _id: req.session.user._id, top: top });
            }
        });
    }
})

app.listen(5000);
