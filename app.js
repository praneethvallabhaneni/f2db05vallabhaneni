var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Engine = require("./models/engine");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var engineRouter = require('./routes/engines');
var gridBuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var engineRouter = require('./routes/engines');
var resourceRouter = require('./routes/resource');

require('dotenv').config(); 
const connectionString =  process.env.MONGO_CON 
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}); 


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/engines', engineRouter);
app.use('/gridbuild', gridBuildRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed on 

async function recreateDB(){ 
  // Delete everything 
  await Engine.deleteMany(); 
 
  let instance1 = new 
    Engine({
      bikesType:"2 wheeler",
      Cylinders:0,
      FuelType:"no fuel",
      Transmission:"No gears"}); 

  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  });
  
  let instance2 = new 
    Engine({
      bikesType:"hiking bikes",
      Cylinders:0,
      FuelType:"no fuel",
      Transmission:"No gears"}); 
      
  instance2.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("Second object saved") 
  });

  let instance3 = new 
  Engine({
    bikesType:"Radial",
    Cylinders:0,
    FuelType:"LPG",
    Transmission:"Automatic"}); 
    
instance3.save( function(err,doc) { 
    if(err) return console.error(err); 
    console.log("Second object saved") 
});

} 
 
let reseed = true; 
if (reseed) { recreateDB();} 

module.exports = app;
