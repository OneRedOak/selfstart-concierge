var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* Test Post from User Sign Up Form */
router.post('/register', function(req, res) {
    var user = req.body;

    var newUser = new User({
        email: user.email,
        password: user.password
    });

    newUser.save(function(err) {
        res.status(200).json(newUser);
    })
});

module.exports = router;
