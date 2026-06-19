import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/nutriplan";

export async function connectDB() {
  try {
    if (mongoose.connections[0].readyState) {
      return;
    }

    await mongoose.connect(MONGODB_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Error:", error);
  }
}