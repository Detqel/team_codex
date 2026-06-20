import { Request, Response } from "express";
import Dish from "../models/Dish";

const getIngredients = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const { dish } = req.body;

    const dishData = await Dish.findOne({
      dishName: {
        $regex: new RegExp(`^${dish}$`, "i"),
      },
    });

    if (!dishData) {
      return res.status(404).json({
        success: false,
        message: "Dish not found",
      });
    }

    return res.status(200).json({
      success: true,
      ingredients: dishData.ingredients,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { getIngredients };

