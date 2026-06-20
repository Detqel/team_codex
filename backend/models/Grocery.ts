import mongoose from "mongoose";

interface IGroceryItem {
  name: string;
  quantity: number;
  selected: boolean;
}

export interface IGrocery {
  dishName: string;
  items: IGroceryItem[];
}

const grocerySchema = new mongoose.Schema<IGrocery>(
  {
    dishName: {
      type: String,
      required: true,
    },

    items: [
      {
        name: {
          type: String,
          required: true,
        },
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

const Grocery = mongoose.model<IGrocery>("Grocery", grocerySchema);

export default Grocery;

