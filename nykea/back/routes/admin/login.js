var express = require('express');
var router = express.Router();
var usuariosModel1 = require('./../../models/usuariosModel')

router.get('/', function(req, res, next) {
  res.render('admin/login', { layout: 'admin/layout' });    //view/carpetaadmin/login.hbs
});                                                         //view/carpetaadmin/layout.hbs


router.get('logout', function (req, res, next) {
  req.session.destroy(); //destruir las variables de sesion (id y usuario)
  res.render('admin/login', { layout: 'admin/layout' });
}); //cierre del logout


router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;     //Capturar la info //usuario
    var password = req.body.password;                      //clave

    var data = await usuariosModel1.getUserByUsernameAndPassword(usuario, password);

    if (data != undefined) {

      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;

      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  } //cierre de catch
}); //cierre de router.post

module.exports = router;
