var express = require('express');
var passport = require('passport');
var session = require('express-session');

var users = require('./server/controller/user');
var home = require('./server/controller/home');
var usercoin = require('./server/controller/UserCoin');

var session = require('express-session');
var router = express.Router();

// GET home page.
router.get('/',home.signin, function(req, res, next) {
  res.render('index', { title: 'Expresscoin', user: req.user });
});

// Get Login
router.get('/login',home.signin,function(req, res, next) {
  res.render('login', { title: '로그인', message: req.flash('loginMessage'),user : req.user });
});
// Get SignUp
router.get('/signup',home.signin,function(req, res, next) {
  res.render('signup', { title: '회원가입', message: req.flash('signupMessage'),user : req.user });
});

// Post Login
router.post('/login',passport.authenticate('login', {
  successRedirect : '/profile',
  failureRedirect : '/login',
  failureFlash : true,
}));
// Post SignUp
router.post('/signup',passport.authenticate('signup', {
  successRedirect : '/login',
  failureRedirect : '/signup',
  failureFlash : true,
}));

// profile
router.get('/profile', home.isLoggedIn, function(req, res, next) {
  res.render('profile', { user : req.user });
});

// Logout
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;
