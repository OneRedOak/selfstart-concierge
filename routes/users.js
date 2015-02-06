var express = require('express');
var router = express.Router();
var SearchForm = require('../models/SearchForm')

/* GET userlist. */
router.get('/userlist', function(req, res) {
    var db = req.db;

    SearchForm.find({}, function(err, data) {
       res.send(JSON.parse(JSON.stringify(data)));
    });

    /*
    db.collection('selfstart1').find().toArray(function (err, items) {
        res.json(items);
    });
    */
});

/*
 * POST to adduser.
 */
router.post('/adduser', function(req, res) {
    var db = req.db;

    var formEntry = new SearchForm({
        fullname: 'Test Test',
        email: 'dabest@u.com'
    });

    /*
     'fullname': res.fullname,
     'email': res.email,
     'qlearn': res.qlearn,
     'qwhy': res.qwhy,
     'qbackground': res.qbackground,
     'qformat': res.qformat,
     'qbudget': res.qbudget,
     'qdate': res.qdate,
     'completed': res.completed
     */

    formEntry.save(function(err) {
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    })

    /*
    db.collection('selfstart1').insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
    */
});

module.exports = router;
