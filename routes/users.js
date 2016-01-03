var express = require('express');
var router = express.Router();
var User = require('models/user');

/* GET users listing. */
router.get('/users', function(req, res, next) {
  //res.send('respond with a resource');
  User.find({}, function(err, users) {
      if(err) throw err; 
      console.log(users);
  });
});

module.exports = router;
