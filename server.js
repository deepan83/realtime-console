var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

server.listen(port);

io.on('connection', function(client) {
    client.on('notifyOutage', function(data) {
      io.emit('outage', data);
    });

});

exports = module.exports = app;
