var express = require('express');
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

    newUser.save(function(err) {
        res.status(200).json(newUser);
    })
});

module.exports = router;
