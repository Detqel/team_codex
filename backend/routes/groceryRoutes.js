const express = require("express");
const router = express.Router();

const Grocery = require("../models/Grocery");

// Generate grocery list
router.post("/generate", async (req, res) => {
  try {
    const { dish } = req.body;

    let ingredients = [];

    if (dish === "Chicken Biryani") {
      ingredients = [
        "Rice",
        "Chicken",
        "Onion",
        "Tomato",
        "Spices"
      ];
    } 
    else if (dish === "Veg Biryani") {
      ingredients = [
        "Rice",
        "Carrot",
        "Beans",
        "Peas",
        "Spices"
      ];
    }
    else {
      ingredients = [
        "Vegetables",
        "Oil",
        "Spices"
      ];
    }

    res.json({
      dish,
      items: ingredients
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to generate grocery",
      error: error.message
    });
  }
});
// Save grocery list
router.post("/", async (req, res) => {
  try {
    const grocery = await Grocery.create(req.body);

    res.status(201).json({
      message: "Grocery saved successfully",
      grocery,
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to save grocery",
      error: error.message,
    });
  }
});


// Get saved grocery lists
router.get("/", async (req, res) => {
  try {
    const groceries = await Grocery.find();

    res.json(groceries);

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch groceries",
      error: error.message,
    });
  }
});


module.exports = router;