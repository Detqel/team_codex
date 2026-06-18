const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const dietRoutes = require("./routes/dietRoutes");
const groceryRoutes = require("./routes/groceryRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/diet", dietRoutes);
app.use(express.json());
app.use("/api/grocery", groceryRoutes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("NutriPlan Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});