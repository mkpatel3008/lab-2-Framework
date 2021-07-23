var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Maulik Patel' });
});
router.get('/geetapatel', function(req, res, next) {
  res.render('geeta', { title: 'Geeta Patel' });
});
router.get('/kanupatel', function(req, res, next) {
  res.render('kanu', { title: 'Kanu Patel' });
});
module.exports = router;
