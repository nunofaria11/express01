var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var jsonParser = bodyParser.json();

app.post('/api/post', jsonParser, function(req, res) {
    if (!req.body) return res.sendStatus(400);
    var result = {
        status: 'success',
        input: req.body
    };
    res.json(result);
});

app.get('/status', function(req, res) {
    res.send('up');
});

app.get('/api/data', function(req, res) {
    res.json({
        id: 1,
        code: 'one',
        description: 'first number'
    });
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at %s in port %d', host, port);
});
