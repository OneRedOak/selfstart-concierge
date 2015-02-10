var express = require('express');
var jwt = require('jwt-simple');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

/* Strategy options for Passport authentication */
var strategyOptions = {
    usernameField: 'email',
    passReqToCallback: true
};

/* Login strategy using Passport for verifying user login authenticity */
var loginStrategy = new LocalStrategy(strategyOptions, function(req, email, password, done) {

    var searchUser = {
        email: email
    };

    User.findOne(searchUser, function(err, user) {
        if (err) {
            return done(err);
        }

        if(!user) {
            return done(null, false, {message: 'Wrong email/password'});
        }

        user.comparePasswords(password, function(err, isMatch) {

            if (err) {
                return done(err);
            }

            if (!isMatch) {
                return done(null, false, {message: 'Wrong email/password'});
            }

            return done(null, user);

        });
    });
});

/* Register strategy using Passport for verifying user registration authenticity */
var registerStrategy = new LocalStrategy(strategyOptions, function(req, email, password, done) {
    console.log(req);
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
        done(null, newUser);
    });

});

passport.use('local-register', registerStrategy);
passport.use('local-login', loginStrategy);

/* Test Post from User Sign Up Form */
router.post('/register', passport.authenticate('local-register'), function (req, res) {
    console.log(req);
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

module.exports = router;
