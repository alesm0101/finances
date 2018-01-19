var mongoose = require('mongoose');
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
var schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    fullName: { 
        type: String,
        trim: true
     },
     password: { 
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    privileges: {
        type: Number,
        trim: true,
        default: 0
    },
    defaultCurrency: {
        type: String,
        trim: true,
        required: true
    },
    reg_time: {
        type: Date,
        default: Date.now
    }
});

schema.path('username').validate(function (username) {
    return username.length > 1;
});
schema.path('password').validate(function (password) {
    return password.length > 2;
});   
module.exports = mongoose.model('users', schema); // name of the collection in lowercase

/*
{
    "username":"admin",
    "fullName":"Administrator",
    "password":"123",
    "email":"test@gmail.com",
    "privileges":1,
    "defaultCurrency":"usd"
}
 */