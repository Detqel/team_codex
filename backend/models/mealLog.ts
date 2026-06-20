import mongoose, { Schema, models, model } from "mongoose";
//import MealLog from "@/lib/models/MealLog";

const MealLogSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    mealId: Number,
    mealName: String,
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number,
    category: String,
  },
  { timestamps: true }
);

export default models.MealLog || model("MealLog", MealLogSchema);     