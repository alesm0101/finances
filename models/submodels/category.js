var mongoose = require('mongoose');
// var Categoryschema = new mongoose.Schema({
const Categoryschema = {
    name: { 
        type: String,
        required: true,
        trim: true,
        // unique: true,
    },
    description: { 
        type: String,
    },
    color: {
        type: String
    },
    icon: { 
        type: String,
    },
    editable: {
        type: Boolean,
        default: true
    },
    transactionsTotal: { // should be update in transactions (add delete update category)
        type: Number,
    },
    visible: {
        type: Boolean,
        default: true
    },
    categoryType: { // 0 uncategorized, 1 expenses , 2 incomes --> It is not necesary for the subcategory
        type: Number,
        default: 0
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
module.exports = Categoryschema; // it is used as var Categoryschema = require('./submodels/category'); 
//});