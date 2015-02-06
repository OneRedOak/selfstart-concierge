var express = require('express');
var router = express.Router();
var SearchForm = require('../models/SearchForm')

/* GET userlist. */
router.get('/userlist', function(req, res) {
    var db = req.db;

    SearchForm.find({}, function(err, data) {
       res.send(JSON.parse(JSON.stringify(data)));
    });
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
    });
});

module.exports = router;
