// 몽고 디비 연결
var mongoose = require('mongoose');

var usercoinSchema = mongoose.Schema({
    // usercoin의 id 차용
    user: {
      ref: 'usercoin'
    },
    exchange : String,  // 거래소
    coinname : String,  // 코인 이름
    purchase : Number,  // 코인 구매가
    deposit : Number,   // 입금액
    // date : { type : date }  // 구매 날짜
});

module.exports = mongoose.model('UserCoin', usercoinSchema);
