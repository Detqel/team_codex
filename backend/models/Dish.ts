import mongoose, { Schema, Document, Model } from "mongoose";

export interface IDish extends Document {
  dishName: string;
  ingredients: string[];
}

const dishSchema: Schema<IDish> = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

const Dish: Model<IDish> = mongoose.model<IDish>("Dish", dishSchema);

export default Dish;

