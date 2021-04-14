const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  isDone: {
    type: Boolean,
    required: true
  }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
module.exports = itemSchema;