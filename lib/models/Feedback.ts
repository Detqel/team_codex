import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema(
  {
    rating: Number,
    feedback: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Feedback ||
  mongoose.model("Feedback", FeedbackSchema);