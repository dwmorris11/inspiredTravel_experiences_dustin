const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  experiences: [],
});

module.exports.destinationModel = mongoose.model('destinations', destinationSchema);
