const db = require('../models/db');

// function getDistance(location1, location2) {
//   var a = location1.lattitude - location2.lattitude;
//   var b = location1.longitude - location2.longitude;
//   var c = Math.sqrt(a*a + b*b);
//   return c;
// }

// funtion to calculate the distance with haversine formula 

function getDistance(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
// helper to get the closest cab

function getClosestCab (location, color) {
  var cabsList = db.get('cabs').value();
  var closest = null;
  var closestDistance = Infinity;
  cabsList.forEach(function(cab) {
    if (!cab.isBooked) {
      if (color) {
        if (color.toUpperCase() === cab.color) {
          var cabLocation = {
            lattitude: cab.lattitude,
            longitude: cab.longitude
          }
          var distance = getDistance(
            cabLocation.lattitude,
            cabLocation.longitude,
            location.lattitude,
            location.longitude,
            );
          if (distance < closestDistance) {
            closestDistance = distance;
            closest = cab;
          }
        }
      } else {
        var distance = getDistance(cab.location, location);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = cab;
        }
      }

    }
  });
  return closest;
}

module.exports = {
  getDistance,
  getClosestCab,
}