var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
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

/*router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});*/


  /* GET login page. */
router.get('/', function(req, res) {
// Display the Login page with any flash message, if any
    res.render('login', { message: req.flash('message') });
});
 
  /* Handle Login POST */
router.post('/login', passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: '/',
    //failureFlash : true 
}));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;