var express = require('express');
var router = express.Router();

var TVShow = require('../models/tvshow');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  TVShow.find(function (err, tvshows) {
    if (err) return next(err);
    res.json(tvshows);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  TVShow.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  TVShow.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  TVShow.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  TVShow.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;