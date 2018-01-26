var mongoose = require('mongoose');
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
var schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
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
        min: 0,
        default: 0
    },
    defaultCurrency: {
        type: String,
        trim: true,
        required: true
    },
    preferencesShowSubcategories: {
        type: Boolean,
        default: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    categoriesListId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
    },
    productsListId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
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
schema.path('defaultCurrency').validate(function (password) {
    return password.length === 3;
});

module.exports = mongoose.model('users', schema); // name of the collection in lowercase

/*
{
    "username":"admin",
    "fullName":"Administrator",
    "password":"123",
    "email":"test@gmail.com",
    "privileges":1,
    "defaultCurrency":"usd",
    "preferencesShowSubcategories": true
}
 */