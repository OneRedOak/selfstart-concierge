var _ = require('underscore');
var fs = require('fs');
var jwt = require('jwt-simple');

var config = require('./config.js');

var model = {
    verifyUrl: 'http://localhost:3000/auth/verifyEmail?token=',
    title: 'psJwt',
    subTitle: 'Thanks for verifying!',
    body: 'Please verify your email address by clicking the button below.'
};

exports.send = function(email) {
    var payload = {
        sub: email
    };

    var token = jwt.encode(payload, config.EMAIL_SECRET);

    console.log(getHtml(token));
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