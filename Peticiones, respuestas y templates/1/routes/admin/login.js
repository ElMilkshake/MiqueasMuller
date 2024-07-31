var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('admin/login', { layout: 'admin/layout' });    //view/carpetaadmin/login.hbs
});                                                         //view/carpetaadmin/layout.hbs

module.exports = router;
