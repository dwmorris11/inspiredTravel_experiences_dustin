const mongoose = require('mongoose');

const quickViewSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  category: String,
  overview: String,
  languages: Array,
  vouchers_allowed: Array,
  tour_time: {
    time: Number,
    unit: String,
  },
  instant_confirmation: Boolean,
  map_address: {
    lat: Number,
    lng: Number,
  },
}, {
  timestamps: true,
});

module.exports.quickViewModel = mongoose.model('quickview', quickViewSchema);
