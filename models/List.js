const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  title: {
      type: String,
      required: true,
      unique: true,
  }, 

  items: [itemSchema]
});

const List = mongoose.model("List", listSchema);

module.exports = List;
module.exports = listSchema;