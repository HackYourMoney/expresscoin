var express = require('express');
var passport = require('passport');
var session = require('express-session');

var users = require('./server/controller/user');
var home = require('./server/controller/home');
var usercoin = require('./server/controller/UserCoin');
var mypage = require('./server/controller/MyPage')

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

// mypage
router.get('/mypage', function(req, res, next) {
  const applicationServerPublicKey = 'BNAsKl9dL8E3B26ZnPorQVGq--NymrrVC6VBZYjwBCex-xz_3QVMLPGAGXGbcWbTnjk0wQANh4pchjz6ccMgg2w';
  res.render('mypage', { user : req.user });
});

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
  usercoin.list(req,res);
});

// 코인 등록
router.get('/coinRegister', function(req, res) {
  usercoin.create(req,res);
});
router.post('/save', function(req,res) {
  usercoin.save(req,res);
});

// 코인 확인
router.get('/coinRead/:id', function(req, res) {
  usercoin.show(req, res);
});

// 코인 수정
router.get('/coinEdit/:id', function(req, res) {
  usercoin.edit(req, res);
});
router.post('/coinUpdate/:id', function(req, res) {
  usercoin.update(req, res);
});

// 코인 삭제
router.post('/delete/:id', function(req, res) {
  usercoin.delete(req, res);
});


module.exports = router;
