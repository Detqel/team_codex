const express = require("express");
const router = express.Router();

router.get("/meals", (req, res) => {
  res.json([
    {
      breakfast: "Idli",
      lunch: "Chicken Biryani",
      dinner: "Chapati",
      snacks: "Fruit Salad",
      calories: 1800
    },
    {
      breakfast: "Dosa",
      lunch: "Veg Biryani",
      dinner: "Paneer Tikka",
      snacks: "Berry Smoothie",
      calories: 2000
    },
    {
      breakfast: "Oats Bowl",
      lunch: "Grilled Chicken",
      dinner: "Green Salad",
      snacks: "Sprouts Salad",
      calories: 1500
    }
  ]);
});

module.exports = router;