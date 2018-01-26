const categoriesData = [
    {
        "name": "Transfer Input",
        "description": "",
        "color": "rgb(166,166,166,1)",
        "icon": "fa-exchange",
        "editable": false,
        "transactionsTotal":0,
        // "transitionsRefIds":"",
        "visible" : false,
        "categoryType": 2,
        "createdDate": new Date,
        "lastUpdate" : new Date,
        "subCategories": []
    },
    {
        "name": "Transfer Output",
        "description": "",
        "color": "rgb(166,166,166,1)",
        "icon": "fa-exchange",
        "editable": false,
        "transactionsTotal":0,
        // "transitionsRefIds":"",
        "visible" : false,
        "categoryType": 1,
        "createdDate": new Date,
        "lastUpdate" : new Date,
        "subCategories": []
    },
    {
        "name": "Unassigned",
        "description": "",
        "color": "rgb(166,166,166,1)",
        "icon": "fa-question",
        "editable": false,
        "transactionsTotal":0,
        // "transitionsRefIds":"",
        "visible" : false,
        "categoryType": -1,
        "createdDate": new Date,
        "lastUpdate" : new Date,
        "subCategories": []
    },
    {
        "name": "Uncategorized",
        "description": "",
        "color": "rgb(211,211,211,1)",
        "icon": "fa-user-secret",
        "editable": true,
        "transactionsTotal":0,
        // "transitionsRefIds":"",
        "visible" : true,
        "categoryType": 0,
        "createdDate": new Date,
        "lastUpdate" : new Date,
        "subCategories": []
    },
    {
        "name": "Food and Drinks",
        "description" : "",
        "color": "rgba(13, 202, 158,1)",
        "icon": "shopping-cart",
        "editable": true,
        "transactionsTotal":0,
        // "transitionsRefIds":"",
        "visible" : true,
        "categoryType": 1,
        "createdDate": new Date,
        "lastUpdate" : new Date,
        "subCategories": [
            {
                "name": "Cravings",
                "description" : "",
                "color": "rgba(13, 202, 158,1)",
                "icon": "fa-apple",
                "editable": true,
                "transactionsTotal":0,
                // "transitionsRefIds":"",
                "visible" : true,
                "categoryType": 1,
                "createdDate": new Date,
                "lastUpdate" : new Date,
            },
            {
                "name": "Groceries",
                "description" : "",
                "color": "rgba(255,233,245,1)",
                "icon": "shopping-cart",
                "editable": true,
                "transactionsTotal":0,
                // "transitionsRefIds":"",
                "visible" : true,
                "categoryType": 1,
                "createdDate": new Date,
                "lastUpdate" : new Date,
            }
        ]
    }
];
module.exports = categoriesData; // it is used as var AccountSchema = require('./submodels/account');