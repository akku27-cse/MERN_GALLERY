const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ImageSchema = new Schema({
  address: {
    type: String,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
  address_id: {
    type: String,
    unique: true,
  },
});

module.exports = Image = mongoose.model("image", ImageSchema);
