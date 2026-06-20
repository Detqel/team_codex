const Dish = require("../models/Dish");

const getIngredients = async (req, res) => {
  try {
    const dish = req.body.dish;

    const dishData = await Dish.findOne({
      dishName: {
        $regex: new RegExp(`^${dish}$`, "i")
      }
    });

    if (!dishData) {
      return res.status(404).json({
        success: false,
        message: "Dish not found",
      });
    }

    res.status(200).json({
      success: true,
      ingredients: dishData.ingredients,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = { getIngredients };



