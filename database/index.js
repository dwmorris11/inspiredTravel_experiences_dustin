const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { experienceModel } = require('./experiencesDB.js');

const { generateExperienceEntry } = require('./dynamicseed.js');

const mongoUri = 'mongodb://localhost/experiences';
const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const dbC = mongoose.connection;
dbC.on('error', console.error.bind(console, 'connection error: '));
dbC.once('open', () => console.log('connected'));

const insertSampleExperience = function (entry) {
  experienceModel.create(entry)
    .catch((error) => console.log('error: ', error));
};

const seed = (qty, insert) => {
  for (let i = 0; i < qty + 1; i += 1) {
    const entry = generateExperienceEntry(i);
    insert(entry);
  }
};

// Run seed script only as necessary
seed(500, insertSampleExperience);

module.exports.db = db;
