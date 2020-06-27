// const Post = require('../models/post');
const RideHelper = require('../helpers');
const db = require('../models/db');
const PRICE_PER_KM = 2;
exports.startRide = (req, res, next) => {
  var lattitude = Number(req.query.lattitude);
  var longitude = Number(req.query.longitude);
  var userLocation = {
    lattitude: lattitude,
    longitude: longitude
  };
  var color = req.query.color || null;
  var cab = RideHelper.getClosestCab(userLocation, color);
  if (cab) {
    db.get('cabs')
    .find({ id: cab.id })
    .assign({ isBooked: true })
    .write()
    res.json({
      message: "Cab booked!",
      cabID: cab.id,
      driverName: cab.driverName,
      driverNumber: cab.driverNumber,
      lattitude: cab.lattitude,
      longitude: cab.longitude
    });
  } else {
      res.json({
        message: "No cabs available!"
      });
  }
};
exports.endRide = (req, res, next) => {
  var cabID = parseInt(req.query.id);
  var lattitude = Number(req.query.lattitude);
  var longitude = Number(req.query.longitude);
  var location = {
    lattitude: lattitude,
    longitude: longitude
  };
  var userCab = db.get('cabs')
    .find({ id: cabID })
    .value()
  if (userCab) {
    if (userCab.isBooked) {
      var cabLocation = {
        lattitude: userCab.lattitude,
        longitude: userCab.longitude
      }
      var distance = RideHelper.getDistance(
        cabLocation.lattitude,
        cabLocation.longitude,
        location.lattitude,
        location.longitude);
      db.get('cabs')
      .find({ id: cabID })
      .assign({
        isBooked: false,
        lattitude,
        longitude
      })
      .write()
      const bill = parseInt(distance * PRICE_PER_KM)
      res.json({
        message: "Ride completed!",
        distance: `${Number(distance)}KM`,
        billAmount: `Rs. ${bill}`
      })
    } else {
      res.json({
        message: "Can't complete ride for a cab which is not booked!"
      });
    }
  } else {
    res.json({
      message: "Could not find cab with id " + cabID
    });
  }
};

exports.cabsList = (req, res, next) => {
  var radius = parseInt(req.query.radius);
  var lattitude = Number(req.query.lattitude);
  var longitude = Number(req.query.longitude);
  var location = {
    lattitude: lattitude,
    longitude: longitude
  };
  var cabsList = db.get('cabs').value()
  var availableCabs = cabsList.filter(cab => {
    var d = RideHelper.getDistance(
      cab.lattitude,
      cab.longitude,
      location.lattitude,
      location.longitude
    );
    return cab.isBooked === false && d<= radius;
  })
  res.json({
    message: availableCabs.length ? 'Cabs Available !' : 'Cabs Not Available !',
    cabs: availableCabs
  })
};
