var express = require('express');
var router = express.Router();
var postModel = require('../models/post');

// index
router.get('/', function(req, res, next) {
  res.render('index', {});
});

// show
router.get('/:id([0-9a-z]{32})', function(req, res, next) {
  postModel.Post.findOne({
    id: req.params.id,
  }, function(err, doc) {
    if (err) {
      console.log(err);
    }
    res.render('show', {
      body: doc.body,
      createdAt: doc.created_at,
    });
  });
});

// show diff

// create
router.post('/', function(req, res, next) {
  var post = new postModel.Post({
    body: req.body.body,
  });
  post.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    res.redirect('/' + doc.id);
  });
});

// update
// destroy

module.exports = router;
