var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    value:{
        type: Number,
        required: true
    },
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    parentCategoryId : { // can be category /subcategory
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories.categories",
    },
    categoryId : { // can be category /subcategory
        type: mongoose.Schema.Types.ObjectId,
        //ref: "categories.categories",
    },
    productType: { // relation table -> -1 anyone (free) 0 account 1 credit card
        type: Number,
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        //ref: "credits_cards.creditsCards",
    },
    pending: { // paid // received --> not credit card.
        // it will be ignoring to balance after paid (it need to by update with pending change)
        type: Boolean,
        default: false
    },
    expendingDate: { 
        type: Date,
        required: true
    },
    paymentDate: { // it is ignored when there are instances
        // paymentDate for payments pending ( not credit card)
        // could be be empty maybe the user doesnt have idea when 
        // the expense category will shoe whit the expendingDate, but in transaaction view it will be paymentDate
        type: Date,
    },
    typeTransaction: { // 1 expenses , 2 incomes, 3 expense but just category transfer output, 4 income but just category transfer input...
        type: Number,
        required: true
    },
    visible: { // It doesn have use
        type: Boolean,
        default: false
    },
    opening: { // to ask in the service for the monthly transaction (expendingDate) and  pending and opening
        // it need to be update whit the last instance paid
        type: Boolean
    },
    instances:[ // example: instalments of credit cards or just a buy in two instalments
        // if it has one ( payment is bigger than one) so when removes or update the value so update the original value (parent)
        // in the service when the user update or delete check is the status should be still opening and ask to delete everything all or just one instance
        // check the accounts to update the balance after update or delete
        {
            value:{
                type: Number
            },
            paymentDate:{
                type: Date
            },
            exchangeRate:{
                type: Number,
            },
            paid: {
                type: Boolean,
                default: false
            },
            productType: { // relation table -> -1 anyone (free)  0 account 1 credit card
                type: Number,
                required: true
            },
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                //ref: "credits_cards.creditsCards",
            },
        }
    ],
    currency: {
        type: String,
        required: true
    },
    exchangeCurrency:{
        type: String,
    },
    exchangeRate:{
        type: Number,
    },
    isManualTransaction: {
        type: Boolean,
        default: true
    },
    reg_time: {
        type: Date,
        default: Date.now
    },

});
schema.path('currency').validate(function (currency) {
    return currency.length === 3;
});
module.exports = mongoose.model('transactions', schema); // name of the collection in lowercase

/*
// required: value, userId, source, expendingDate, typeTransaction, currency, instnce[{value, source}]
// new Date().toISOString()
{
"name":"Coto",
"description":"",
"value": 578.36,
"userId": "5a688287310d979ca22952ab",
"parentCategoryId":"5a688287310d979ca22952ad",
"categoryId":"5a688287310d979ca22952ae",
"productType": 0,
"productId":"5a688287310d979ca22952b5",
"pending":false,
"expendingDate":"2018-01-24",
"paymentDate":"2018-01-24",
"typeTransaction":1,
"visible":true,
"opening": false,
"instances": [],
"currency":"usd",
"exchangeCurrency": "ars",
"exchangeRate": "19.16",
"isManualTransaction": true
}
 */