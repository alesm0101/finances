var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/finances', function(err, res) { // here the database name is defined
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models
var usersUrl = require('./routes/users');
// var usersfullUrl = require('./routes/users_full');
// var accountsUrl = require('./routes/accounts');
// var creditCardsUrl = require('./routes/credit_cards');
var productsUrl = require('./routes/products');
var categoriesUrl = require('./routes/categories');
var transactionsUrl = require('./routes/transactions');
var monthlyTransactionsUrl = require('./routes/monthly_transactions');
var activateUserUrl = require('./routes/activate_user');

// Example Route
var router = express.Router();
var routerTest = router.get('/', function(req, res) {
  res.send("Welcome to the API!");
});
app.use('/', routerTest);

// API routes
app.use('/api/users', usersUrl);
// app.use('/api/users-full', usersfullUrl);
// app.use('/api/accounts', accountsUrl);
// app.use('/api/credit-cards', creditCardsUrl);
app.use('/api/activate-user', activateUserUrl);
app.use('/api/products', productsUrl);
app.use('/api/categories', categoriesUrl);
app.use('/api/transactions', transactionsUrl);
app.use('/api/monthly-transactions', monthlyTransactionsUrl);

// Start server
app.listen(3200, function() {
  console.log("Node server running on http://localhost:3200");
});