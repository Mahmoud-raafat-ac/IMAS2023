var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Home');
});

router.get('/About', function(req, res, next) {
  res.render('About');
});

router.get('/Agenda', function(req, res, next) {
  res.render('Agenda');
});

router.get('/Topics', function(req, res, next) {
  res.render('Topics');
});

router.get('/Structure', function(req, res, next) {
  res.render('Structure');
});

router.get('/Sponsers', function(req, res, next) {
  res.render('Sponsers');
});

module.exports = router;
