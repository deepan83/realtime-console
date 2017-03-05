var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var port = process.env.PORT || 8080;

var clients = [];
var messagesOnConnect = [];

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

server.listen(port);

io.on('connection', function(client) {

  client.on('join', function(data) {
    clients.push({
      id: client.id,
      app: data.app
    });

    if (messagesOnConnect.length) {
      messagesOnConnect.forEach((messageOnConnect) => {
        if (messageOnConnect.appsToNotify.includes(data.app)) {
          io.to(client.id).emit(messageOnConnect.messageType, messageOnConnect.message);
        }
      });
    }
  });

  client.on('notify', function(data) {
    if (data.notifyFutureConnections) {
      messagesOnConnect.push({
        messageType: data.messageType,
        message: data.message,
        appsToNotify: data.appsToNotify
      });
      io.to(client.id).emit('existing-messages', messagesOnConnect);
    }

    clients
      .filter((client) => {
        return data.appsToNotify.includes(client.app);
      })
      .forEach((client) => {
        io.to(client.id).emit(data.messageType, data.message);
      });
  });

  client.on('request-existing-messages', () => {
    io.to(client.id).emit('existing-messages', messagesOnConnect);
  });

  client.on('remove-message', (messageType) => {
    let messageToRemove = messagesOnConnect.find((messageOnConnect) => {
      return messageOnConnect.messageType === messageType;
    });
    let filteredMessagesOnConnect = messagesOnConnect.filter((messageOnConnect) => {
      return messageOnConnect.messageType !== messageType;
    });

    messagesOnConnect = filteredMessagesOnConnect;

    client.broadcast.emit(messageToRemove.messageType, null);
    io.to(client.id).emit('existing-messages', messagesOnConnect);
  });
});

exports = module.exports = app;
