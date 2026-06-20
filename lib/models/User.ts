import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: String,
  username: String,
  dob: String,
  gender: String,
  bio: String,

  foodPreference: String,
  activityLevel: String,
  selectedGoal: String,

  calories: Number,
  waterGoal: String,
  stepsGoal: String,
  checkInTime: String,

  weight: String,
  height: String,
  targetWeight: String,

  dailySteps: Number,
  waterConsumed: Number,

  weeklySteps: {
    mon: Number,
    tue: Number,
    wed: Number,
    thu: Number,
    fri: Number,
    sat: Number,
    sun: Number,
  },

  profileImage: String,
});

const User =
  mongoose.models.User ||
  mongoose.model("User", UserSchema);

export default User;
