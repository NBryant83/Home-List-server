const mongoose = require("mongoose");
const { Item, itemSchema } = require("../models/Item")

const listSchema = new mongoose.Schema({
  title: {
      type: String,
      required: false,
      unique: true,
  }, 

  items: [itemSchema]
});

const List = mongoose.model("list", listSchema);

module.exports = {
  List,
  listSchema
}