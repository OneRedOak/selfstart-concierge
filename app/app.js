var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.get('/', function(request, response) {
    response.send({
        test:'success'
        page:'landingPage'
    });
});

app.get('/form', function(request, response) {
    response.send({
        test:'success',
        page:'form'
    });
});

app.get('/thankyou', function(request, response) {
    response.send({
        test:'success',
        page:'form'
    });
});

app.get('/report', function(request, response) {
    response.send({
        test:'success',
        page:'form'
    });
});

app.get('/about', function(request, response) {
    response.send({
        test:'success',
        page:'form'
    });
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s', host, port);
})