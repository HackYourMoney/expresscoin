// var passport = require('passport')
//    , LocalStrategy = require('passport-local').Strategy;
// // 회원 가입 
// exports.create = function(req, res) {
//     console.log(" user create! ")
//     console.log(req.email);

//     // 시일 패애...
//     // authenticate에 매개변수를 전달하는 법을 모르겠슴... 
//     passport.authenticate('signup', {
//         successRedirect : '/login', 
//         failureRedirect : '/', //로그인 실패시 redirect할 url주소
//         failureFlash : false,
//         session: true 
//     })
// };