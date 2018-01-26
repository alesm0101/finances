const accountsData = function(reqbody) {
    return [
    {
        "name": "Wallet",
        "balance": 0,
        "openingBalance": 0,
        "totalExpenses" : 0,
        "totalIncomes" : 0,
        "totalTransfers" : 0,
        "color": "rgba(128, 64, 0, 1.0)",
        "icon": "fa-money",
        "includeInSummary": true,
        "currency": reqbody.defaultCurrency,
        "createdDate": new Date,
        "lastUpdate": new Date
    }
]
}
module.exports = accountsData; // it is used as var AccountSchema = require('./submodels/account');