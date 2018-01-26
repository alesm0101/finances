var mongoose = require('mongoose');
var Categoryschema = require('./submodels/category');

var schema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
        unique: true,
    },
    categories: [
            { // equal to Categoryschema
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
                categoryType: { // -1 unassigned, 0 uncategorized, 1 expenses , 2 incomes --> It is not necesary for the subcategory
                    type: Number,
                    default: 0
                },
                subCategories: [Categoryschema],
                createdDate: {
                    type: Date,
                    default: Date.now
                },
                lastUpdate: {
                    type: Date,
                    default: Date.now
                }
            }
    ]
});
   
module.exports = mongoose.model('categories', schema); // name of the collection in lowercase
// required: userId, categories[{name}]
/*
    "userId": "5a624d7a667a5d16d831b7e8",
    categories: see data/categories_list
 */