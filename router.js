var express = require('express');
var passport = require('passport');

var users = require('./server/controller/user');
var home = require('./server/controller/home');
var session = require('express-session');
var router = express.Router();

const api = require('./server/helper/api');

/* GET home page. */
router.get('/',home.signin, function(req, res, next) {
  res.render('index', { title: 'Expresscoin'});
});

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


// API ROUTER //

// 목록 반환 // 

// 거래소 종류
router.get('/api/exchanger', function(req, res) {
  res.send(api.exchangeStore());
});
// 코인네스트
router.get('/api/coinnest', function(req, res) {
  res.send(api.coinnest());
});
// 업비트 krw
router.get('/api/upbit_krw', function(req, res) {
  res.send(api.upbitKRW());
});
// 업비트 btc
router.get('/api/upbit_btc', function(req, res) {
  res.send(api.upbitBTC());
});
// 빗썸
router.get('/api/bithumb', function(req, res) {
  res.send(api.bithumb());
});
// 코인원
router.get('/api/coinone', function(req, res) {
  res.send(api.coinone());
});

// 코인 현재 가격 반환 //

// 코인네스트
router.get('/api/coinnest/:id', function(req, res) {
  res.send(api.coinnestCoin(req.params.id));
});
// 업비트
router.get('/api/upbit/:id', function(req, res) {
  res.send(api.upbitCoin(req.params.id));
});
// 코인네스트
router.get('/api/bithumb/:id', function(req, res) {
  res.send(api.bithumbCoin(req.params.id));
});
// 코인원
router.get('/api/coinone/:id', function(req, res) {
  res.send(api.coinoneCoin(req.params.id));
});

/**
 * 코인 결과 반환
 * @param {buy,deposit,category,tsl} : {산코인가격,입금금액,거래소,코인이름}
 * @return {JSON} : {"category","coinname","buycoin","nowcoin","deposit","nowdeposit","percent","present"}
 */
router.get('/api/coinstatus', function(req, res) {

  // api/coinstatus?buy=222&deposit=80000&category=coinnest&coinname=tsl
  let buy = req.query.buy;
  let deposit = req.query.deposit;
  let category = req.query.category;
  let coinname = req.query.coinname;

  res.send(api.coinstatus(buy,deposit,category,coinname));
});

module.exports = router;
