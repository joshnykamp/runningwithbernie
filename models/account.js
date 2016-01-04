var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username: String,
    password: String,
    zipcode: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);