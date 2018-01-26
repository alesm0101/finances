var express = require('express');
var router = express.Router();

var MyModelCollection = require('../models/transaction'); // the name 'transactions" of the collection is commning from user.js -> mongoose.model('users', schema)

/* GET /api/2018-0 */
router.get('/', function(req, res, next) {
  console.log(req.query.month);
  console.log(req.query.year);
  console.log(req.query.userid);
  if(req.query.month.length > 0 && req.query.year.length === 4 && req.query.userid){
    var vYear = parseInt(req.query.year, 10);
    var vMonth = parseInt(req.query.month, 10);
    var validYear =  vYear && vYear.toString().length == 4;
    var validMonth = vMonth >= 0  && vMonth < 12;

    if (validYear && validMonth) {
      var start = new Date(vYear, vMonth, 1).toISOString();
      console.log(vMonth)
      var end = new Date(vYear, vMonth + 1, 0).toISOString();
      console.log(start, end);
      MyModelCollection.find({expendingDate: {$gte: start, $lt: end}, userId : req.query.userid}, function (err, post) {
        if (err) return next(err);
        res.json(post);
      });  
    } else {
      return next('invalid date');
    } 
  } else {
    return next('invalid request');
  }
});

module.exports = router;