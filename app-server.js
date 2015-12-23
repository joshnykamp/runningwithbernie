var express = require('express');
var dbConfig = require('./db.js');
var mongoose = require('mongoose');
var passport = require("passport");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', routes);

var initPassport = require('./passport/init');
initPassport(passport);

mongoose.connect(dbConfig.url);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

var server = app.listen(process.env.PORT, process.env.IP);
var io = require("socket.io").listen(server);

io.sockets.on('connection', function(socket) {
  console.log("Connected: %s", socket.id);
});