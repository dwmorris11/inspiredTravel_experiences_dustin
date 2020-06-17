const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/experiences';
mongoose.Promise = require('bluebird');
const {experienceModel} = require('./experiencesDB.js');
const {quickViewModel} = require('./quickviewDB.js');
const {sampleExperience} = require('./seed.js');

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const dbC = mongoose.connection;
dbC.on('error', console.error.bind(console, 'connection error: '));
dbC.once('open', () => console.log('connected'));

const insertSampleExperience = function() {
  experienceModel.create(sampleExperience)
    .then(() => mongoose.disconnect());
};

insertSampleExperience();

module.exports.db = db;