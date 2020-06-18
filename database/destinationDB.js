const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  experiences: [],
});

module.exports.destinationModel = mongoose.model('destination', destinationSchema);
