var express = require('express');
var jwt = require('jwt-simple');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('../services/localStrategy.js');
var emailVerification = require('../services/emailVerification.js');
var User = require('../models/user');
var FeedbackForm = require('../models/feedbackForm.js');
var config = require('../services/config.js');

passport.use('local-register', LocalStrategy.register);
passport.use('local-login', LocalStrategy.login);

/* Test Post from User Sign Up Form */
router.post('/register', passport.authenticate('local-register'), function (req, res) {

    /* If user just registered (only one request in queries array) send verification email */
    console.log(req.user.queries.length);
    if (req.user.queries.length <= 1) {
        emailVerification.send(req.user.email);
    }

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

    var token = jwt.encode(payload, config.EMAIL_SECRET);

    res.status(200).send({
        user: user.toJSON(),
        token: token
    });

}

/* Returns previous searches made by user */
router.get('/status', function(req, res) {

    if(!req.headers.authorization) {
        return res.status(401).send({
            message: 'You are not authorized.'
        });
    }
    var token = req.headers.authorization.split(' ')[1];
    var payload = jwt.decode(token, config.EMAIL_SECRET);

    if (!payload.sub) {
        res.status(401).send({
            message: 'You are not authorized!'
        });
    }

    User.findOne({_id: payload.sub}, function(err, user) {
        if (err) {
            console.log(err);
        }

        /* If user exists, request to queries array */
        if (user) {

            res.status(200).send({
                queries: user.queries,
                registered: user.registered
            });
        }
    });

});

router.get('/auth/verifyEmail', emailVerification.handler);

router.post('/feedback', function(req, res) {

    console.log(req.body.message);

    var feedbackFormEntry = new FeedbackForm({
        'message': req.body.message,
        'date': new Date().getTime(),
        'userid': ''
    });

    feedbackFormEntry.save(function (err) {
        console.log('Feedback saved');
        res.status(200).send({
            message: 'Feedback saved'
        });
    });

});

module.exports = router;
