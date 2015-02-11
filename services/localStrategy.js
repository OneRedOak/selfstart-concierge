var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

/* Strategy options for Passport authentication */
var strategyOptions = {
    usernameField: 'email',
    passReqToCallback: true
};

/* Login strategy using Passport for verifying user login authenticity */
exports.login = new LocalStrategy(strategyOptions, function(req, email, password, done) {

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
exports.register = new LocalStrategy(strategyOptions, function(req, email, password, done) {

    var searchUser = {
        email: email
    };

    User.findOne(searchUser, function(err, user) {
        if (err) {
            return done(err);
        }

        /* If user exists, request to queries array */
        if (user) {
            user.queries.push({
                    query: user.query,
                    qlearn: user.qlearn,
                    qwhy: user.qwhy,
                    qbackground: user.qbackground,
                    qformat: user.qformat,
                    qbudget: user.qbudget,
                    qdate: new Date().getTime(),
                    rlink: null,
                    rstatus: false
            });

            user.save(function (err) {
                done(null, user);
            });

        } else {

            // return done(null, false, {message: 'Email already exists'});
            var user = req.body;

            /* If user doesn't exist, create user object with pre populated array */
            var newUser = new User({
                fullname: user.fullname,
                email: user.email,
                password: "selfstart",
                queries: [{
                    query: user.query,
                    qlearn: user.qlearn,
                    qwhy: user.qwhy,
                    qbackground: user.qbackground,
                    qformat: user.qformat,
                    qbudget: user.qbudget,
                    qdate: new Date().getTime(),
                    rlink: null,
                    rstatus: false
                }],
                registered: false
            });

            newUser.save(function (err) {
                done(null, newUser);
            });
        }

    });
});
