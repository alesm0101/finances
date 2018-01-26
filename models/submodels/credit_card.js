var mongoose = require('mongoose');
//var CreditCardSchema = new mongoose.Schema({
const CreditCardSchema = {
    name: {
        type: String,
        required: true,
        trim: true,
        // unique: true,
    },
    brand: {  // defined in shared
        type: String,
     },
    limit: { 
        type: Number,
    },
    currency: {
        type: String,
        required: true
    },
    // billOpen : { type: Number }
    totalTransactions:{ // should be update in transactions. (update with delete, add, update)
        type: Number,
    },
    closingDate: {
        type: Number,
        required: true
    },
    paymentDate: {
        type: Number,
        required: true
    },
    associatedAccountId: {
        type: mongoose.Schema.Types.ObjectId, // it doesnt have real validation, the id can be non-existent
        ref: "accounts.accounts",
        // required: true
    },
    currency: {
        type: String,
        trim: true,
        required: true
    }
}
module.exports = CreditCardSchema; // it is used as var CreditCardSchema = require('./submodels/credit_card');

//});