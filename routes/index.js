var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HI JUSTIN!' });
});

/* GET Hello World page. */
router.get('/form', function(req, res) {
    res.render('form', { title: 'Welcome to the form!' })
});

module.exports = router;
