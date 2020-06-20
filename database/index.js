const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const mongoUri = 'mongodb://localhost/experiences';
const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const dbC = mongoose.connection;
dbC.on('error', console.error.bind(console, 'connection error: '));
dbC.once('open', () => console.log('connected'));


module.exports.db = db;
