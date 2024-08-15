var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require ('dotenv').config();

var indexRouter = require('./routes/index');          //index.js
var usersRouter = require('./routes/users');          //user.js
const catalogoRouter = require('./routes/catalogo')   //catalogo.js
const nosotrosRouter = require('./routes/nosotros')   //nosotros.js
const contactoRouter = require('./routes/contacto');  //contacto.js

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalogo', catalogoRouter); //
app.use('/nosotros', nosotrosRouter); //
app.use('/contacto', contactoRouter); //

app.get('/catalogo', function(req,res,next){
  res.send('Hola soy la pagina del Catalogo')
});

app.get('/nosotros', function(req,res,next){
  res.send('Hola soy la pagina de Nosotros')
});

app.get('/contacto', function(req,res,next){
  res.send('Hola soy la pagina de Contacto')
});

var pool = require('./models/bd');

//select
/* pool.query('select * from empleados').then(function (resultados) {
  console.log(resultados)
}); */

//insert
/* var obj = {
  nombre: 'Juan',
  apellido: 'Lopez',
  trabajo: 'docente',
  edad: 38,
  salario: 150000,
  email: 'juanlopez@gmail.com'
}

pool.query('insert into empleados set ?', [obj]).then(function(resultados)
{
  console.log(resultados)
}); */

//modificar
/* var id = 23;
var obj = {
  nombre: 'Pablo',
  apellido: 'Gomez'
}

pool.query('update empleados set ? where id_emp=?', [obj, id]).then(function (resultados){
  console.log(resultados);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
}); */

//borrar
/* var id = 23;
pool.query('delete from empleados where id_emp=?', [id]).then(function (resultados){
  console.log(resultados);
}); */

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
