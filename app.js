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
var usersurl = require('./routes/users');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Ready!");
});

// API routes
app.use('/api/users', usersurl);

// Start server
app.listen(3200, function() {
  console.log("Node server running on http://localhost:3200");
});