const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rentBookSchema = new Schema({
  reservation_id: {
    type: String,
    require: false,
  },
  pickup_time: {
    type: String,
    require: true,
  },
  return_time: {
    type: String,
    require: true,
  },
  discount: {
    type: Number,
    require: false,
  },

  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  vehicle_id: {
    type: String,
    require: true,
  },

  total_price: {
    type: Number,
    require: true,
  },

  additional_charges: {
    type: [],
    require: false,
  },
});

module.exports = mongoose.model("rentBook", rentBookSchema);
