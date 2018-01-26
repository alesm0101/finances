//var mongoose = require('mongoose');
//var AccountSchema = new mongoose.Schema({
const AccountSchema = {
    name: {
        type: String,
        required: true,
        trim: true,
        // unique: true,
    },
    balance: { // should be update in transactions
        type: Number,
        required: true
     },
     openingBalance: {
        type: Number,
        required: true
     },
     totalExpenses: { // should be update in transactions. (update with delete, add, update)
        type: Number,
     },
     totalIncomes:{ // should be update in transactions. (update with delete, add, update)
        type: Number,
     },
     totalTransfers:{ // should be update in transactions. (update with delete, add, update)
        type: Number,
     },
     color: { 
        type: String,
        default: "rgba(0,0,0,1)"
    },
    icon: {
        type: String,
    },
    includeInSummary: {
        type: Boolean,
        default: true
    },
    currency: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    lastUpdate: {
        type: Date,
        default: Date.now
    }
}
// module.exports.AccountSchema = AccountSchema; // equal to export { AccountSchema } and it is used as var {AccountSchema} = require('./submodels/account');
module.exports = AccountSchema; // it is used as var AccountSchema = require('./submodels/account');

//});
/*
AccountSchema.path('currency').validate(function (currency) {
    return currency.length === 3;
});
*/