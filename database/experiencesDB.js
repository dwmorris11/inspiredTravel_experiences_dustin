const mongoose = require('mongoose');
const db = require('./index.js');

const experiencesSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  heart: Boolean,
  image: String,
  description: String,
  rating: Number,
  cost_unit: {
    cost: Number,
    unit: String
  },
  link: String,
  popularity: Number,
  quickviews: Array
},{
  timestamps: true
});

module.exports.experienceModel = mongoose.model('experience', experiencesSchema );
