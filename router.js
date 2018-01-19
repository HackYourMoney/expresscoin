var express = require('express');
var passport = require('passport');

var cheerio = require('cheerio');  
var request = require('request');


var users = require('./server/controller/user');
var home = require('./server/controller/home');
var session = require('express-session');
var router = express.Router();

var helper = require('./server/helper/helper');


/* GET home page. */
router.get('/',home.signin, function(req, res, next) {
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
router.get('/main', [home.isLoggedIn,home.test], function(req, res, next) {
  res.render('main', { header: '존버코인', user : req.user });
});

// 로그아웃
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

// 거래소 종류
router.get('/api/exchanger', function(req, res) {
  res.send(helper.exchangeStore());
});

// 코인네스트
router.get('/api/coinnest', function(req, res) {
  res.send(helper.coinnest());
});
// 업비트 krw
router.get('/api/upbit_krw', function(req, res) {
  res.send(helper.upbit_krw());
});
// 업비트 btc
router.get('/api/upbit_btc', function(req, res) {
  res.send(helper.upbit_btc());
});
// 빗썸
router.get('/api/bithumb', function(req, res) {
  res.send(helper.bithumb());
});
// 코인원
router.get('/api/coinone', function(req, res) {
  res.send(helper.coinone());
});

// 현재 가격 가져오기 
// 코인네스트
router.get('/api/coinnest/:id', function(req, res) {

  var url = 'https://api.coinnest.co.kr/api/pub/ticker?coin='+req.params.id;  
  request( url, function (error, response, body) {
   
    console.log(JSON.parse(body).last);
   
    var result = ""+(JSON.parse(body).last);
    res.send(result);
    //res.render("image",{url:bod2});
  });


});
// 코인네스트
router.get('/api/test/:id', function(req, res) {
  console.log("코인네스트");
  console.log(helper.coinnest_getdata(req.params.id));
  res.send(helper.coinnest_getdata(req.params.id));
});



module.exports = router;
