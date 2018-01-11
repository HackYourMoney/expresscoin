var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./router');

var mongoose = require('mongoose');
var passport = require('passport');
// mongo 관련 모듈 추가 
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var favicon = require('serve-favicon');
var flash = require("connect-flash");

var app = express();


// view engine setup
app.set('views', path.join(__dirname, './server/views'));
app.set('view engine', 'ejs');

// 몽고 db 설정 
// 데이터 베이스 구성한 것 연결 
var config = require('./server/config/Mongo.js');
mongoose.connect(config.url);
mongoose.connection.on('error',function(){
  console.error('MongoDB Connection Error. Make sure MongoDB is running');
});

require('./server/config/passport')(passport);
app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.jpg')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'public')));
// secret for session
app.use(session({
  secret: 'sometextgohere',
  saveUninitialized: true,
  resave: true,
  //store session on MongoDB using express-session + connect mongo
  store: new MongoStore({
      url: config.url,
      collection : 'sessions'
  })
}));

// passport url 
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


app.use('/', index);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{ title:'Error' });
});

module.exports = app;

// 서버 실행
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), () => {
  console.log('coin 가즈아~ : ' + server.address().port);
});