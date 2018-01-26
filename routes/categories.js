var express = require('express');
var router = express.Router();

var MyModelCollection = require('../models/user_category'); // the name 'categories" of the collection is commning from user_category.js -> mongoose.model('categories', schema)

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  MyModelCollection.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  MyModelCollection.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  MyModelCollection.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  MyModelCollection.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  MyModelCollection.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;