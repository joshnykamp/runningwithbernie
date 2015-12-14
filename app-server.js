var express = require('express');
var dbConfig = require('./db.js');
var mongoose = require('mongoose');
var passport = require("passport");
var expressSession = require("express-session");
var app = express();

mongoose.connect(dbConfig.url);

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));
app.use(expressSession({secret: 'reTAHQwJpCa1LMT'}));
app.use(passport.initialize());
app.use(passport.session());

var server = app.listen(process.env.PORT, process.env.IP);
var io = require("socket.io").listen(server);

io.sockets.on('connection', function(socket) {
  console.log("Connected: %s", socket.id);
});