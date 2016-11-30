var express = require('express');
var router = express.Router();
var reclamo = {tipoReclamo:'odeca',observacion :'mal servicio',FechaReclamo:'29/11/2016'};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Proyecto Final' ,subtitle: 'Avances en Computacion',reclamo:reclamo });

});

module.exports = router;