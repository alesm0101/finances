var express = require('express');
var router = express.Router();

// 

var userCollection = require('../models/user'); // the name 'users" of the collection is commning from user.js -> mongoose.model('users', schema)
var categoryCollection = require('../models/user_category'); // the name 'categories" of the collection is commning from user.js -> mongoose.model('users', schema)
var productCollection = require('../models/user_product'); // the name 'products" of the collection is commning from user.js -> mongoose.model('users', schema)

// var mongoose = require('./node_modules/mongoose');
// console.log(mongoose.Types.ObjectId.isValid);
// console.log(mongoose.Types.ObjectId.isValid('53cb6b9b4f4ddef1ad47f943'));

// data
var categoriesData = require('../models/data/categories_list'); // it is a array
var accountsData = require('../models/data/accounts_list'); // it return a a array

/* POST /todos */
router.post('/', function(req, res, next) {
        // validate defaultCurrency and userId and check before if categoriesListId or productsListId are created
        console.log(req.body);
        var userId = req.body.userId;
        var defaultCurrency = req.body.defaultCurrency;
        var categoriesListId = req.body.categoriesListId;
        var productsListId =  req.body.productsListId;

        var categoriesInit = new categoryCollection({
            "userId" : userId,
            "categories" : categoriesData
        });
        var productsInit = {
              "userId": userId,
              "accounts" : accountsData(req.body),
              "creditCards" :  []
        }
        // if(!categoriesListId && productsListId){
            // categoriesInit.save();
            categoriesInit.save(function(err1, post1) { // create the categories
                if (err1) return next(err1);
                // get categoriesListId
                categoriesListId = post1._id;
                console.log(post1._id);

                productCollection.create(productsInit, function (err2, post2) {// create the products
                    if (err2) return next(err2);
                        // get productsListId
                        productsListId = post2._id;
                        console.log(post2._id);
                        // update categoriesListId, productsListId and defaultCurrency
                        userCollection.findOneAndUpdate({ "_id": userId }, { "$set": { "categoriesListId": categoriesListId, "productsListId": productsListId, "defaultCurrency": defaultCurrency }}).exec(function(err3, data){
                            if(err3) {
                                console.log(err3);
                                res.status(500).send(err3);
                            } else {
                                res.status(200).send(data);
                            }
                        });
                });
            });
        // }

});

module.exports = router;

/* post
{
    "userId":"5a6a5b37600eb2cdc80faff4",
    "defaultCurrency":"usd"
}

*/