import express, { Request, Response } from "express";
import Grocery from "../models/Grocery";

const router = express.Router();

// Request body type
interface GenerateGroceryBody {
  dish: string;
}

// Generate grocery list
router.post(
  "/generate",
  async (
    req: Request<{}, {}, GenerateGroceryBody>,
    res: Response
  ): Promise<Response | void> => {
    try {
      const { dish } = req.body;

      let ingredients: string[] = [];

      if (dish === "Chicken Biryani") {
        ingredients = [
          "Rice",
          "Chicken",
          "Onion",
          "Tomato",
          "Spices",
        ];
      } else if (dish === "Veg Biryani") {
        ingredients = [
          "Rice",
          "Carrot",
          "Beans",
          "Peas",
          "Spices",
        ];
      } else {
        ingredients = [
          "Vegetables",
          "Oil",
          "Spices",
        ];
      }

      return res.json({
        dish,
        items: ingredients,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: "Failed to generate grocery",
        error: error.message,
      });
    }
  }
);

// Save grocery list
router.post(
  "/",
  async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const grocery = await Grocery.create(req.body);

      return res.status(201).json({
        message: "Grocery saved successfully",
        grocery,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: "Failed to save grocery",
        error: error.message,
      });
    }
  }
);

// Get saved grocery lists
router.get(
  "/",
  async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const groceries = await Grocery.find();

      return res.json(groceries);
    } catch (error: any) {
      return res.status(500).json({
        message: "Failed to fetch groceries",
        error: error.message,
      });
    }
  }
);

export default router;

