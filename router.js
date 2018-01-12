var express = require('express');

var passport = require('passport');

var users = require('./server/controller/user');
var home = require('./server/controller/home');
var session = require('express-session');
var router = express.Router();

/* GET home page. */
router.get('/',home.signin, function(req, res, next) {
  res.render('index', { title: 'Expresscoin'});
});

router.get('/header',home.signin, function(req, res, next) {
  res.render('index', { title: 'Expresscoin'});
});

// soomin add //
// 로그인 페이지 이동
router.get('/login',home.signin,function(req, res, next) {
  res.render('login', { header: '로그인 페이지', message: req.flash('loginMessage'),user : req.user });
});

// 회원가입 페이지 이동
router.get('/signup',home.signin,function(req, res, next) {
  res.render('signup', { header: '회원가입', message: req.flash('signupMessage'),user : req.user });
});

// 로그인 
router.post('/login',passport.authenticate('login', {
  successRedirect : '/main', 
  failureRedirect : '/login', //로그인 실패시 redirect할 url주소
  failureFlash : true,
}));
// 회원가입 데이터 등록
router.post('/signup',passport.authenticate('signup', {
  successRedirect : '/login', 
  failureRedirect : '/signup', //로그인 실패시 redirect할 url주소
  failureFlash : true,
}));
// 로그인 
router.get('/main', home.isLoggedIn, function(req, res, next) {
  res.render('main', { header: '존버코인', user : req.user });
});

// 로그아웃
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;
