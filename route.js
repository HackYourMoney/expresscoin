var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Coin 가입'});
});

// Get Login
router.get('/login', function(req, res, next) {
  res.render('login', {title: 'Login here', message: req.flash('LoginMessage')});
});
// Post Login
router.post('/login', passport.authenticate('login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
}));

// Get SignUp
router.get('/signup', function(req, res, next) {
  res.render('signup', {title: 'SignUp', message: req.flash('SignUpMessage')});
});
// Post SignUp
router.post('/signup', passport.authenticate('signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true
}));

// Get Profile
router.get('/profile', isLoggedIn, function(req, res, next) {
  res.render('profile', {title: 'profile', user : req.user});
});

// 로그인 여부 확인
function isLoggedIn(req, res, next) {
  if(req.isAuthenticated())
    return next();
  res.redirect('/login');
}

// Logout
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
