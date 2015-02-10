var express = require('express');
var jwt = require('jwt-simple');
var router = express.Router();
var User = require('../models/user');

/* Test Post from User Sign Up Form */
router.post('/register', function(req, res) {
    var user = req.body;

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

    newUser.save(function(err) {
        createSendToken(newUser, res);
    });
});

router.post('/login', function(req, res) {
    var user = req.body;

    var searchUser = {
        email: user.email
    };

    User.findOne(searchUser, function(err, user) {
        if (err) {throw err}

        if(!user) {
            return res.status(401).send({message: 'Wrong email/password'});
        }

        user.comparePasswords(req.body.password, function(err, isMatch) {

            if (err) {
                throw err;
            }

            if (!isMatch) {
                return res.status(401).send({message: 'Wrong email/password'});
            }

            createSendToken(user, res);

        });
    });
});

/* Logic to create token */
function createSendToken(user, res) {

    var payload = {
        sub: user.id
    };

    var token = jwt.encode(payload, "tempSecretKey");

    res.status(200).send({
        user: user.toJSON(),
        token: token
    });

}

/* Returns previous searches made by user */
router.get('/searches', function(req, res) {

    if(!req.headers.authorization) {
        return res.status(401).send({
            message: 'You are not authorized.'
        });
    }
    var token = req.headers.authorization.split(' ')[1];
    var payload = jwt.decode(token, "tempSecretKey");

    if (!payload.sub) {
        res.status(401).send({
            message: 'You are not authorized!'
        });
    }

    res.json({test:'it is a test'});

});

module.exports = router;
