const mongoose = require('mongoose');
const { quickViewSchema } = require('./quickviewDB.js');

const experiencesSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  heart: Boolean,
  image: String,
  description: String,
  rating: Number,
  cost_unit: {
    cost: Number,
    unit: String,
  },
  link: String,
  popularity: Number,
  quickview: quickViewSchema,
}, {
  timestamps: true,
});

module.exports.experienceModel = mongoose.model('experiences', experiencesSchema);
