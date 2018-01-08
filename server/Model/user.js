var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  local : {
  username : String,
  password : String,
  email : String
  }
});

// 비밀번호 암호화
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// 비밀번호 유효성 확인
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('CoinUser'. userSchema);

// module.exports = mongoose.model('CoinUser', mongoose.Schema({
//   username : String,
//   password : String,
//   email : String
// }));