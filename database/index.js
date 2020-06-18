const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { experienceModel } = require('./experiencesDB.js');
// const { quickViewModel } = require('./quickviewDB.js');
const { sampleExperience } = require('./seed.js');

const mongoUri = 'mongodb://localhost/experiences';
const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const dbC = mongoose.connection;
dbC.on('error', console.error.bind(console, 'connection error: '));
dbC.once('open', () => console.log('connected'));

const insertSampleExperience = function () {
  experienceModel.create(sampleExperience)
    .then(() => mongoose.disconnect())
    .catch((error) => console.log('error: ', error));
};

insertSampleExperience();

module.exports.db = db;
