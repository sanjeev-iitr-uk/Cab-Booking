
// const { DataStore } = require('notarealdb');
 
// const store = new DataStore('../database');
// const cabs = store.collection('cabs');
// module.exports = cabs;

// fake database setup using lowdb npm module 

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('database.json')
const db = low(adapter)
db.defaults({
  cabs: [{
    "id": 1,
    "driverName": "driver 1",
    "driverNumber": "0000000001",
    "lattitude": 0,
    "longitude": 0,
    "isBooked": false,
    "color": "WHITE"
  }, {
    "id": 2,
    "driverName": "driver 2",
    "driverNumber": "0000000002",
    "lattitude": 10,
    "longitude": 10,
    "isBooked": false,
    "color": "PINK"
  }, {
    "id": 3,
    "driverName": "driver 3",
    "driverNumber": "0000000003",
    "lattitude": 20,
    "longitude": 20,
    "isBooked": false,
    "color": "PINK"
  }, {
    "id": 4,
    "driverName": "driver 4",
    "driverNumber": "0000000004",
    "lattitude": 20,
    "longitude": 10,
    "isBooked": false,
    "color": "WHITE"
  }, {
    "id": 5,
    "driverName": "driver 5",
    "driverNumber": "0000000005",
    "lattitude": 20,
    "longitude": 20,
    "isBooked": false,
    "color": "WHITE"
  }]
}).write()
module.exports = db;
