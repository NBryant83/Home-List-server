const mongoose = require("mongoose")
const { Item, itemSchema } = require("../models/Item")


const templateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,    
  },
  items: [itemSchema]
})



const Template = mongoose.model("template", templateSchema);

module.exports = {
  Template,
  templateSchema
}