var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./public/index.html');
});

router.get('/results', function(req, res, next) {
    res.sendfile('./public/results.html');
});

/* GET Hello World page. */
router.get('/index', function(req, res) {
    res.render('index', { title: 'Welcome to the SelfStart Dashboard' })
});

/* GET Hello World page. */
router.get('/form', function(req, res) {
    res.render('form', { title: 'Welcome to the form!' })
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

module.exports = router;
