var express = require('express');
var router = express.Router();

var MyModelCollection = require('../models/transaction'); // the name 'transactions" of the collection is commning from transaction.js -> mongoose.model('transactions', schema)

/* GET /api listing. */
router.get('/', function(req, res, next) {
  console.log("s")
  MyModelCollection.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* POST /api */
router.post('/', function(req, res, next) {
  MyModelCollection.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /api/id */
router.get('/:id', function(req, res, next) {
  MyModelCollection.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /api/:id */
router.put('/:id', function(req, res, next) {
  MyModelCollection.find(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /api/:id */
router.delete('/:id', function(req, res, next) {
  MyModelCollection.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;