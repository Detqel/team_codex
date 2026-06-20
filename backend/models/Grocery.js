const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema(
  {
    dishName: {
      type: String,
      required: true,
    },

    items: [
      {
        name: String,
        quantity: {
          type: Number,
          default: 1,
        },
        selected: {
          type: Boolean,
          default: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Grocery", grocerySchema);


