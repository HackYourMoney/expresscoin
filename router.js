var express = require('express');
var passport = require('passport');
var session = require('express-session');

var users = require('./server/controller/user');
var home = require('./server/controller/home');
// var usercoin = require('./sever/controller/UserCoin');

var router = express.Router();

/* GET home page. */
router.get('/',home.signin, function(req, res, next) {
  res.render('index', { title: 'Expresscoin'});
});

// soomin add //
// Get Login
router.get('/login',home.signin,function(req, res, next) {
  res.render('login', { header: '로그인 페이지', message: req.flash('loginMessage'),user : req.user });
});
// Post Login
router.post('/login',passport.authenticate('login', {
  successRedirect : '/profile',
  failureRedirect : '/login',
  failureFlash : true,
}));

// Get SignUp
router.get('/signup',home.signin,function(req, res, next) {
  res.render('signup', { header: '회원가입', message: req.flash('signupMessage'),user : req.user });
});
// Post SignUp
router.post('/signup',passport.authenticate('signup', {
  successRedirect : '/login',
  failureRedirect : '/signup',
  failureFlash : true,
}));

// Profile
router.get('/profile', home.isLoggedIn, function(req, res, next) {
  res.render('profile', { header: '존버코인', user : req.user });
});

// Logout
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;
