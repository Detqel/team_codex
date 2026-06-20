import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
 feature/rajiya/grocery-generator

import dietRoutes from "./routes/dietRoutes";

develop
import groceryRoutes from "./routes/groceryRoutes";

dotenv.config();

const app = express();
 feature/rajiya/grocery-generator
const PORT = process.env.PORT || 5000;

const PORT = process.env.PORT || 3000;
 develop

// Middleware
app.use(cors());
app.use(express.json());

// Routes
 feature/rajiya/grocery-generator
app.use("/api/diet", dietRoutes);


 develop
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
 feature/rajiya/grocery-generator
});

});

 develop
