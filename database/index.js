const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const mongoUri = 'mongodb://localhost/experiences';
const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const dbC = mongoose.connection;
dbC.on('error', console.error.bind(console, 'connection error: ')); // eslint-disable-line
dbC.once('open', () => console.log('connected')); // eslint-disable-line

module.exports.db = db;
module.exports.dbC = dbC;
