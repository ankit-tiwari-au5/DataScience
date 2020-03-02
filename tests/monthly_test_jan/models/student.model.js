const mongoose = require('mongoose');


var studentSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required:'This field is required.'
    },
    mobile:{
        type: String
    },
    userName:{
        type:String
    },
    city:{
        type: String
    },
    email:{
        type: String
    }
});

studentSchema.path('email').validate((val)=>{
    emailRegex= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');



mongoose.model('Student',studentSchema);