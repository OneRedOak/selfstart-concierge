var express = require('express');
var jwt = require('jwt-simple');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('../services/localStrategy.js');
var emailVerification = require('../services/emailVerification.js');

passport.use('local-register', LocalStrategy.register);
passport.use('local-login', LocalStrategy.login);

/* Test Post from User Sign Up Form */
router.post('/register', passport.authenticate('local-register'), function (req, res) {
    emailVerification.send(req.user.email);
    createSendToken(req.user, res);
});

router.post('/login', passport.authenticate('local-login'), function (req, res) {
    createSendToken(req.user, res);
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

router.get('/auth/verifyEmail', emailVerification.handler);

module.exports = router;
