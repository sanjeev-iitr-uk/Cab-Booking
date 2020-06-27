
const { DataStore } = require('notarealdb');
 
const store = new DataStore('./data');
const cabsList = store.collection('cabsList');
module.exports = cabsList;
