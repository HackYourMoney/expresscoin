var mongoose = require('mongoose');
var Coin = require('../Model/coin.js');

// show all coin
exports.list = function(req, res) {
  Coin.find({}).exec(function (err, coins) { // (에러와, DB의 결과)
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("profile", {
         coins: coins,
         user:req.user
        //  totalInput: totalInput,
        //  totalNow: totalNow,
        //  getMoney: getMoney,
        //  getMoneyRate: getMoneyRate
      });
    }
  });
};

// show one coin
exports.show = function(req, res) {
  Coin.findOne({_id: req.params.id}).exec(function (err, coin) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("coinRead", { user:req.user, coin: coin });
    }
  });
};

// Crteate coin
exports.create = function(req, res) {
  res.render("coinRegister", {user:req.user});
};

exports.save = function(req, res) {
  var coin = new Coin(req.body);
  coin.save(function(err) {
    if(err) {
      console.log(err);
      res.render("coinRegister", {user:req.user});
    } else {
      console.log('코인 등록 성공');
      res.redirect("/coinRead/"+coin._id);
    }
  });
}

// Edit coin
exports.edit = function(req, res) {
  Coin.findOne({_id: req.params.id}).exec(function (err, coin) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("coinEdit", {user:req.user, coin: coin});
    }
  });
};

exports.update = function(req, res) {
  Coin.findByIdAndUpdate(req.params.id, { $set: { exchange: req.body.exchange, coinname: req.body.coinname, purchase:req.body.purchase, deposit:req.body.deposit }}, { new: true }, function (err, coin) {
    if (err) {
      console.log(err);
      res.render("coinEdit", {user:req.user, coin: req.body});
    } else {
      console.log("코인 수정 완료");
      res.redirect("/coinRead/"+coin._id);
    }
  });
};

// Delete Coin
exports.delete = function(req, res) {
  Coin.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("코인 삭제 완료");
      res.redirect("/profile");
    }
  });
};


// // 입금 총액
// var totalInput = 0;
// var totalcoin = Coin.find({}).exec(function(err, total) {
//   for (var i=0;i<Coin.length;i++) {
//     // 입금 총액
//     totalInput += total[i].deposit;
//   };
// });
// // 현재 총액 : API 반영 예정
// var totalNow = 0;
// // 순 수익
// var getMoney = totalNow - totalInput;
// // 수익률
// var getMoneyRate = getMoney/100;
