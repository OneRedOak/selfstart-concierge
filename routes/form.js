var express = require('express');
var jwt = require('../services/jwt.js');
var router = express.Router();
var User = require('../models/User');

/* Test Post from User Sign Up Form */
router.post('/register', function(req, res) {
    var user = req.body;

    var newUser = new User({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password
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

module.exports = router;
