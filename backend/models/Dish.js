const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  dishName: {
    type: String,
    required: true,
    unique: true,
  },
  ingredients: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Dish", dishSchema);