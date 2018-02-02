var express = require('express');
var passport = require('passport');
var session = require('express-session');

var users = require('./server/controller/user');
var home = require('./server/controller/home');

var router = express.Router();

// GET home page
router.get('/',home.signin, function(req, res, next) {
  res.render('index', { user: req.user });
});

// Get Login
router.get('/login',home.signin,function(req, res, next) {
  res.render('login', { message: req.flash('loginMessage'),user : req.user });
});
// Get SignUp
router.get('/signup',home.signin,function(req, res, next) {
  res.render('signup', { message: req.flash('signupMessage'),user : req.user });
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

// Logout
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});
// 회원 탈퇴
router.post('/Signout', function(req, res) {
  res.redirect('/');
});

// MyPage && 코인 보기
router.get('/profile', home.isLoggedIn, function(req, res, next) {
  users.list(req,res);
});

// 코인 등록
router.get('/coinRegister', function(req, res) {
  users.create(req,res);
});
router.post('/save', function(req,res) {
  users.save(req,res);
});

// 코인 확인
router.get('/coinRead/:id', function(req, res) {
  users.show(req, res);
});

// 코인 수정
router.get('/coinEdit/:id', function(req, res) {
  users.edit(req, res);
});
router.post('/coinUpdate/:id', function(req, res) {
  users.update(req, res);
});

// 코인 삭제
router.post('/delete/:id', function(req, res) {
  users.delete(req, res);
});


module.exports = router;
