var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cab Booking Service' });
});
var rideRoutes = require('./ride');

router.use('/ride', rideRoutes)
module.exports = router;
