const mongoose = require('mongoose');
const { quickViewSchema } = require('./quickviewDB.js');

const experiencesSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  image: String,
  description: String,
  rating: Number,
  review_count: Number,
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
