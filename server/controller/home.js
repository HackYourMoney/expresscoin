  var helper = require('../helper/helper');

  // 유저 로그인 체크 ( 로그인 안 했을 시 )
  exports.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
  }
  // 유저 로그인 체크 ( 로그인 했을 시 )
  exports.signin = function(req, res, next) {
    if (!req.isAuthenticated())
        return next();
    res.redirect('/main');
  }
  exports.test = function(req,res,next){
    next();
    console.log(helper.coinnest_getdata("btc"));
  }