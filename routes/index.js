var express = require('express');
var router = express.Router();
// main page route
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cab Booking Service' });
});
// ride routes
var rideRoutes = require('./ride');

router.use('/ride', rideRoutes)
module.exports = router;
