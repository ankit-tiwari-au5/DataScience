const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Student = mongoose.model('Student')

router.get('/', (req, res) => {
    res.render("addOrEdit", {
        viewTitle: "Insert Student"
    });
});

router.post('/views', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res)
});

function insertRecord(req, res) {
    var student = new Student();
    student.fullName = req.body.fullName;
    student.email = req.body.email;
    student.mobile = req.body.mobile;
    student.city = req.body.city;
    student.userName = req.body.userName;
    student.save((err, doc) => {
        if (!err)
            res.redirect('student/list');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("addOrEdit", {
                    viewTitle: "Insert Student",
                    student: req.body
                })
            }
            else
                console.log('Error during record insertion: ' + err);
        }
    })

}

function updateRecord(req, res) {
    Student.findOneAndUpdate({ _id: req.body._id }, (req.body), { new: True }, (err, doc) => {
        if (!err) {
            res.redirect('views/list');
        }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("views/addOrEdit", {
                    viewTitle: 'Update Student',
                    student: req.body
                });
            }
            else
                console.log('Error during record update:' + err);

        }

    });
}

router.get('/list', (req, res) => {

    Student.find((err, docs) => {
        if (!err) {
            res.render("views/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list:' + err);
        }
    })
})

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;

        }
    }
}
router.get('/:id', (req, res) => {
    student.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("views/addorEdit", {
                viewTitle: "Update Student",
                student: doc
            })
        }
    })
})

router.get('/delete/:id', (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/views/list');
        }
        else {
            console.log('Error in Student delete:' + err);
        }
    });
});
module.exports = router;