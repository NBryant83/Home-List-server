const mongoose = require("mongoose")

const templateSchema = new mongoose.Schema({
  title: {
    name: String,
    required: true,
    unique: true,    
  },
  items: [{
    item: String,
    required: true,
    unique: true
  }]
})