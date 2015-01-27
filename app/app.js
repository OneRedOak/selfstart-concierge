var express = require('express');
var path = require('path');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();


app.use(express.static(path.join(__dirname, 'public')));


// routing

app.get('/', function(request, response) {
    response.sendfile('public/index.html');
});

app.get('/form', function(request, response) {
    response.sendfile('public/form.html');

});

app.get('/thankyou', function(request, response) {
    response.send({
        test:'success',
        page:'thankyou'
    });
});

app.get('/report', function(request, response) {
    response.send({
        test:'success',
        page:'report'
    });
});

app.get('/about', function(request, response) {
    response.send({
        test:'success',
        page:'about'
    });
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s', host, port);
})