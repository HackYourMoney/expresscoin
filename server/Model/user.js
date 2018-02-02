// 몽고 디비 연결
var mongoose = require('mongoose');
// 암호화 모듈 생성
var bcrypt = require('bcrypt-nodejs');
// 유저 스키마 만들기
var userSchema = mongoose.Schema({
    email: {
      type: String, // Type
      unique: true, // primary key와 같은 기능
      trim: true,  // 앞뒤 공백 제거
      match: /.+\@.+@..+/, // Email 패턴 정규식
    },
    password: String,
    // coin의 id
    usercoin : {
      ref: 'user',
      id: Schema.ObjectId
    }
});
// 유저 암호화 모듈 메소드
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('User', userSchema);
