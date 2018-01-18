var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
    
    
var usersSchema = new Schema({
    username: { type: String, required: true },
    fullName: { type: Number },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: { type: String, required: true},
    privileges: { type: Number, default: 0 },
    defaultCurrency: { type: String, required: true}
});

Person.path('username').validate(function (v) {
    return v.length > 1;
});
Person.path('password').validate(function (v) {
    return v.length > 2;
});   
module.exports = mongoose.model('UsersSchema', usersSchema);
