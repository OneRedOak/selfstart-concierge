var express = require('express');
var jwt = require('../services/jwt.js');
var router = express.Router();
var User = require('../models/user');

/* Test Post from User Sign Up Form */
router.post('/register', function(req, res) {
    // console.log("Reached form/register Router");
    var user = req.body;
    console.log(user.email);

    var newUser = new User({
        fullname: user.fullname,
        email: user.email,
        password: "selfstart",
        query: user.query,
        qlearn: user.qlearn,
        qwhy: user.qwhy,
        qbackground: user.qbackground,
        qformat: user.qformat,
        qbudget: user.qbudget,
        qdate: new Date().getTime(),
        rlink: null,
        rstatus: null
    });

    var payload = {
        iss: req.hostname,
        sub: user._id
    };

    var token = jwt.encode(payload, "tempSecretKey");

    newUser.save(function(err) {
        res.status(200).send({
            user: newUser.toJSON(),
            token: token
        });
    });
});

/* Returns previous searches made by user */
router.get('/searches', function(req, res) {

    if(!req.headers.authorization) {
        return res.status(401).send({
            message: 'You are not authorized'
        });
    }

    res.json({test:'it is a test'});

});

module.exports = router;
