var _ = require('underscore');
var fs = require('fs');
var jwt = require('jwt-simple');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var config = require('./config.js');

var model = {
    verifyUrl: 'http://localhost:3000/auth/verifyEmail?token=',
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

function getHtml(token) {
    var path = 'public/emailVerification.html';
    var html = fs.readFileSync(path, encoding = 'utf8');

    var template = _.template(html);

    model.verifyUrl += token;

    return template(model);
}

_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};