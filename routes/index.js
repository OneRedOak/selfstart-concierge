var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./public/index.html');
});

/* GET surprise page, pass along query string parameters. */
router.get('/surprise', function(req, res) {
    // var queryObject = url.parse(req.url, true).query;
    console.log(url.parse(req.url, true));
    res.sendFile('./public/surprise.html' + req.url.search);
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
