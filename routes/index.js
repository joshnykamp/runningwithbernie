var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

/* GET Registration Page */
router.get('/register', function(req, res){
    res.render('register');
});
 
router.post('/register', passport.authenticate('signup', {
    successRedirect: '/',
    failureRedirect: '/register',
}));


/* GET login page. */
router.get('/login', function(req, res) {
// Display the Login page with any flash message, if any
    res.render('login');
});
 
  /* Handle Login POST */
router.post('/login', passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: '/',
}));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
 User.find({}, function(err, users) {
      if(err) throw err; 
      res.json(users);
  });
});

router.get('/users/:numofusers', function(req, res, next) {
 var query = User.find({});
 query.limit(req.params.numofusers);
 query.exec(function(err, users) {
     if(err) throw err;
     res.json(users);
 })
 /*User.find.limit(2).exec(function(err, users) {
      if(err) throw err; 
      res.json(users);
  });*/
});

module.exports = router;