import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import groceryRoutes from "./routes/groceryRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.use("/api/grocery", groceryRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((error: Error) => {
    console.error("❌ MongoDB Connection Error:", error.message);
  });

// Health Check Route
app.get("/", (req: Request, res: Response) => {
  res.send("NutriPlan Backend Running");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

