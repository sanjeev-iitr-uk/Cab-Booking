const express = require('express');
const rideController = require('../controllers/rideController');
const fraudDetection = require('../middleware/fraudDetector');
const requestValidator = require('../middleware/requestValidator');
const startRideValidator = requestValidator.searchRideValidator;
const endRideValidator = requestValidator.searchRideValidator;
const searchRideValidator = requestValidator.searchRideValidator;
const router = express.Router();

// GET /ride with validation middleware and controller
router.get('/start', startRideValidator, fraudDetection, rideController.startRide);
router.get('/end', endRideValidator, fraudDetection, rideController.endRide);
router.get('/search', searchRideValidator, fraudDetection, rideController.cabsList);

module.exports = router;
