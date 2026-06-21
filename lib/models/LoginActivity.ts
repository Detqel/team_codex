import mongoose from "mongoose";

const LoginActivitySchema = new mongoose.Schema(
  {
    email: String,
    loginTime: Date,
    device: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.LoginActivity ||
  mongoose.model(
    "LoginActivity",
    LoginActivitySchema
  );