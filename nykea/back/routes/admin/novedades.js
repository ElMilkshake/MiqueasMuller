var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('admin/novedades', {
        layout: 'admin/layout',
        persona: req.session.nombre
    });    //view/carpetaadmin/login.hbs
});                                                         //view/carpetaadmin/layout.hbs

module.exports = router;