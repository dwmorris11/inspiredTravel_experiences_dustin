const mongoose = require('mongoose');

module.exports.quickViewSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  category: String,
  overview: String,
  languages: Array,
  vouchers_allowed: Array,
  cancellations: Boolean,
  supplier: String,
  tour_time: {
    time: Number,
    unit: String,
  },
  instant_confirmation: Boolean,
  map_address: {
    lat: Number,
    lng: Number,
  },
});
