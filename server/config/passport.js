var LocalStrategy = require('passport-local').Strategy;
var User = require('../model/user');

module.exports = function(passport) {

  // user 직렬화
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // user 역직렬화
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  // local-strategy 사용
  passport.use('login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  },
  function(req, email, password, done) {
    if(email)
      email = email.toLowerCase();
      process.nextTick(function() {
        User.findOne({ 'local.email' : email}, function(err, user) {
          if(err)
            return done(err);
          if(!user)
            return done(null, false, req.flash('LoginMessage', 'No user found'));
          if(!user.validPassword(password))
            return done(null, false, req.flash('LoginMessage', 'Wrong Password'));
          else
            return done(null, user);
        });
      });
  }));

  // Local Strategy 등록
  passport.use('signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  },
  function(req, email, password, done) {
    if(email)
      email = email.toLowerCase();
    process.nextTick(function() {
      if(!req.user) {
        User.findOne({'local.email' : email}, function(err, user) {
          if(err)
            return done(err);
          if(user){
            return done(null, false, req.flash('signupMessge', '이메일 사용중'));
          } else {
            var newUser = new User();
            newUser.local.name = req.body.name;
            newUser.local.email = email;
            newUser.local.password = newUser.generateHash(password);
            newUser.save(function(err) {
              if(err)
                throw err;
              return done(null, newUser);
            });
          }
        });
      } else {
        return done(null, req.user);
      }
    });
  }));
};
