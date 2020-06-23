const mongoose = require('mongoose');

module.exports.quickViewSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  category: String,
  subtitle: String,
  overview: String,
  supplier: String,
  map_address: {
    lat: Number,
    lng: Number,
  },
  details: {
    languages: Array,
    vouchers_allowed: Array,
    cancellations: Boolean,
    tour_time: {
      time: Number,
      unit: String,
    },
    instant_confirmation: Boolean,
  },
});
