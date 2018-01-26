var mongoose = require('mongoose');
var AccountSchema = require('./submodels/account');
var CreditCardSchema = require('./submodels/credit_card');

var schema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
        unique: true,
    },
    accounts: [AccountSchema],
    creditCards: [CreditCardSchema],

});

module.exports = mongoose.model('products', schema); // name of the collection in lowercase
/* not working because is in an array
schema.path('currency').validate(function (currency) {
    return currency.length === 3;
});
*/

// required: userId, 
// -> creditCards[ {name, currency, closingDate, paymentDate} ]
// -> accouts [name, balance, openingBalance, currency]
/*
{
    "userId": "5a624d7a667a5d16d831b7e8",
    "accounts": [
        "name" : "Frances Dollars",
        "balance" : 0,
        "openingBalance" : 0,
        "totalExpenses" : 0,
        "totalIncomes" : 0,
        "totalTransfers" : 0,
        "color" : "rgba(35, 146, 247, 1.0)",
        "icon" : "fa-university",
        "includeInSummary" : true,
        "currency" : "ars",
        // "createdDate" : new Date,
        "lastUpdate" :new Date
    ],
    "creditCards" : [
        {
            "name": "Visa Frances",
            "brand": "visa",
            "limit": 40000,
            "currency":"usd",
            "totalTransactions":0,
            "currency": "usd",
            "closingDate": 22,
            "paymentDate": 1,
            "associatedAccountId": "5a624d7a667a5d16d831b7e8"
        }
    ]

}
 */