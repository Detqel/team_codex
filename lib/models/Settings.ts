import mongoose from "mongoose";

const SettingsSchema = new mongoose.Schema({
  mealReminders: Boolean,
  weeklyReports: Boolean,
  groceryAlerts: Boolean,
  theme: String,
});

export default mongoose.models.Settings ||
  mongoose.model("Settings", SettingsSchema);