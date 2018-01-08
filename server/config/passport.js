var LocalStrategy = require('passport-local').Strategy;
var User = require('../model/user');

module.exports = (passport) => {

  // 직렬화 & 역직렬화
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

};