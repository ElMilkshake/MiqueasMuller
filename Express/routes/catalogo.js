var express = require('express');           //manejador de ruta: declaro la variable, cuando
var router = express.Router();              //la recibe va hacia el archivo js.

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hola soy la pagina del Catalogo')
});

module.exports = router;
