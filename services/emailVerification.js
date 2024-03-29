var _ = require('underscore');
var fs = require('fs');
var jwt = require('jwt-simple');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var config = require('./config.js');
var User = require('../models/user.js');

var model = {
    verifyUrl: 'http://tryselfstart.com/form/auth/verifyEmail?token=',
    title: 'SelfStart',
    subTitle: 'Thanks for verifying!',
    body: 'Please verify your email address by clicking the button below.'
};

exports.send = function(email) {
    var payload = {
        sub: email
    };

    var token = jwt.encode(payload, config.EMAIL_SECRET);

    var transporter = nodemailer.createTransport(smtpTransport({
        host: 'smtp.gmail.com',
        secure: true,
        auth: {
            user: 'selfstartteam@gmail.com',
            pass: config.SMTP_PASS
        }
    }));

    var mailOptions = {
        from: 'SelfStart Team <selfstartteam@gmail.com>',
        to: email,
        subject: 'SelfStart Account Verification',
        html: getHtml(token)
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            return res.status(500, err);
        }

        console.log('email sent ', info.response);
    })

};

exports.handler = function (req, res) {
    var token = req.query.token;

    var payload = jwt.decode(token, config.EMAIL_SECRET);

    var email = payload.sub;

    if (!email) return handleError(res);

    User.findOne({email: email}, function(err, foundUser) {
        if (err) {
            return res.status(500);
        }

        if (!foundUser) {
            return handleError(res);
        }

        if (!foundUser.registered) {
            foundUser.registered = true;
        }

        foundUser.save(function (err) {
            if (err) {
                return res.status(500);
            }

            return res.redirect(config.APP_URL);
        })
    })
};

function handleError(res) {
    return res.status(401).send({
        message: 'Authentication failed, unable to verify email'
    });
}

function getHtml(token) {
    var path = 'public/emailVerification.html';
    var html = fs.readFileSync(path, encoding = 'utf8');

    var template = _.template(html);

    model.verifyUrl += token;

    console.log('MODEL.VERIFYURL: ', model.verifyUrl);

    return template(model);
}

_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};